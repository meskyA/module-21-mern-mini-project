import { gql } from '@apollo/client';

export const CREATE_MATCHUP = gql`
  mutation createMatchup($tech1: String!, $tech2: String!) {
    createMatchup(tech1: $tech1, tech2: $tech2) {
      _id
      tech1
      tech2
    }
  }
`;

export const CREATE_VOTE = gql`
  mutation createVote($_id: String!, $techNum: Int!) {
    createVote(_id: $_id, techNum: $techNum) {
      _id
      tech1
      tech2
      tech1_votes
      tech2_votes
    }
  }
`;



// export const getAllMatchups = () => {
//   return fetch('/api/matchup', {
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   });
// };

// export const createMatchup = (matchupData) => {
//   return fetch('/api/matchup', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(matchupData),
//   });
// };

// export const getMatchup = (matchupId) => {
//   return fetch(`/api/matchup/${matchupId}`, {
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   });
// };

// export const createVote = (voteData) => {
//   return fetch(`/api/matchup/${voteData}`, {
//     method: 'PUT',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(voteData),
//   });
// };

// export const getAllTech = () => {
//   return fetch('/api/tech', {
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   });
// };
