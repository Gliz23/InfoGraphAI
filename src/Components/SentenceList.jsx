import React from 'react'

const SentenceList = () => {
    const text = 'Title: The Power of Scripture Reading. - Mark 11:24 NKJV reminds us to believe and receive when we pray. - Our God loves us unconditionally and His words are faithful and true. - Trust in the Lord and lack nothing.- Doubt will hinder us from receiving from God, but faith will bring us what we pray for. - Faith comes from hearing the word of God (Romans 10:17). - Cultivate a lifestyle of reading the Bible and praying to stay close to God. - Pray without ceasing (1 Thessalonians 5:17) and let the word of God dwell richly in you (Colossians 3:16). ';

    const sentences = text.split('.');

    const sentence1 = sentences[0]

  return (
    <div>
      <p>{sentence1}</p>
    </div>
  )
}

export default SentenceList
