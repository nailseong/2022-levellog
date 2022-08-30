import { useEffect } from 'react';

import styled from 'styled-components';

import useTeamPage from 'hooks/useTeamPage';

import TeamForm from 'components/teams/TeamForm';

const InterviewTeamAdd = () => {
  const {
    state: {
      participantNicknameValue,
      watcherNicknameValue,
      watcherMembers,
      participantMembers,
      watchers,
      participants,
    },
    ref: { teamInfoRef },
    handle: {
      setParticipantNicknameValue,
      setWatcherNicknameValue,
      updateMembers,
      updateWatchers,
      addToParticipants,
      addToWatcherParticipants,
      removeToParticipants,
      remoteToWatcherParticipants,
      handleChangeParticipantInput,
      handleChangeWatcherInput,
      handleClickTeamAddButton,
    },
  } = useTeamPage();

  useEffect(() => {
    updateMembers({ nicknameValue: participantNicknameValue });
  }, [participantNicknameValue]);

  useEffect(() => {
    updateWatchers({ nicknameValue: watcherNicknameValue });
  }, [watcherNicknameValue]);

  return (
    <S.Container>
      <TeamForm
        purpose={'생성하기'}
        participantNicknameValue={participantNicknameValue}
        watcherNicknameValue={watcherNicknameValue}
        participants={participants}
        participantMembers={participantMembers}
        watcherMembers={watcherMembers}
        watchers={watchers}
        teamInfoRef={teamInfoRef}
        setParticipantNicknameValue={setParticipantNicknameValue}
        setWatcherNicknameValue={setWatcherNicknameValue}
        addToParticipants={addToParticipants}
        addToWatcherParticipants={addToWatcherParticipants}
        removeToParticipants={removeToParticipants}
        remoteToWatcherParticipants={remoteToWatcherParticipants}
        handleChangeWatcherInput={handleChangeWatcherInput}
        handleChangeParticipantInput={handleChangeParticipantInput}
        handleClickTeamButton={handleClickTeamAddButton}
      />
    </S.Container>
  );
};

const S = {
  Container: styled.main`
    overflow: auto;
    overflow-x: hidden;
    box-sizing: border-box;
    @media (min-width: 1620px) {
      padding: 0 calc((100vw - 1600px) / 2);
      padding-bottom: 200px;
    }
    @media (min-width: 1187.5px) and (max-width: 1620px) {
      padding: 0 calc((100vw - 1187.5px) / 2);
      padding-bottom: 200px;
    }
    @media (max-width: 560px) {
      padding: 0 1.25rem;
      padding-bottom: 200px;
    }
  `,
};

export default InterviewTeamAdd;
