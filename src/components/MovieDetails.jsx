import { useNavigate, useParams } from "react-router-dom"
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Badge,
  Spinner,
} from "react-bootstrap"
import { useEffect, useState } from "react"

const MovieDetails = function () {
  const navigate = useNavigate()
  const params = useParams()

  return <h1>Details</h1>
}

export default MovieDetails
