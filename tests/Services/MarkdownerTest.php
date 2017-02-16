<?php
namespace Tests\Services;

use Tests\TestCase;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class MarkdownerTest extends TestCase
{

    protected $markdown;

    public function setupTest()
    {
        $this->markdown = new \App\Services\Markdowner();
    }

    public function testSimpleParagraphTest()
    {
        $this->assertEquals(
            "<p>test</p>\n",
            $this->markdown->toHTML('test')
        );
    }
}