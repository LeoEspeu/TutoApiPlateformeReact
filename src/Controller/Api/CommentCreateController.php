<?php

namespace App\Controller\Api;

use App\Entity\Comment;
use Symfony\Component\Security\Core\Security;

class CommentCreateController
{
    private $security;

    /**
     * CommentCreateController constructor.
     * @param Security $security
     */
    public function __construct(Security $security)
    {
        $this->security = $security;
    }


    public function __invoke(Comment $data): Comment
    {
        $data->setAuthor($this->security->getUser());
        return $data;
    }
}
