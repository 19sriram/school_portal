<?php
$_studentnumber = $_GET['studentNumber'];
$rootDir = realpath($_SERVER["DOCUMENT_ROOT"]);
$path = new SplFileInfo(__FILE__);
//echo 'The real path is '.$path->getRealPath();
echo dirname(__FILE__).'/'.$_studentnumber;
$rootPath = dirname(__FILE__).'/'.$_studentnumber;

// Initialize archive object
$zip = new ZipArchive();
$zip->open('file.zip', ZipArchive::CREATE | ZipArchive::OVERWRITE);

// Create recursive directory iterator
/** @var SplFileInfo[] $files */
$files = new RecursiveIteratorIterator(
    new RecursiveDirectoryIterator($rootPath),
    RecursiveIteratorIterator::LEAVES_ONLY
);

foreach ($files as $name => $file)
{
    // Skip directories (they would be added automatically)
    if (!$file->isDir())
    {
        // Get real and relative path for current file
        $filePath = $file->getRealPath();
        $relativePath = substr($filePath, strlen($rootPath) + 1);

        // Add current file to archive
        $zip->addFile($filePath, $relativePath);
    }
}

// Zip archive will be created only after closing object
$zip->close();
?>