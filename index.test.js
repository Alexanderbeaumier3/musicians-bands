const { sequelize } = require("./db");
const { Band, Musician, Song } = require("./index");

describe("Band, Musician, and Song Models", () => {
  /**
   * Runs the code prior to all tests
   */
  beforeAll(async () => {
    // the 'sync' method will create tables based on the model class
    // by setting 'force:true' the tables are recreated each time the
    // test suite is run
    await sequelize.sync({ force: true });
  });

  test("can create a Band", async () => {
    const band = await Band.create({ name: "Nirvana", genre: "rock" });
    expect(band).toBeInstanceOf(Band);
  });

  test("can create a Musician", async () => {
    // TODO - test creating a musician
    const musician = await Musician.create({
      name: "Dave Grohl",
      instrument: "guitar",
    });
    expect(musician).toBeInstanceOf(Musician);
  });

  test("can update a Band", async () => {
    // TODO - test updating a band
    const band = await Band.create({ name: "Nirvana", genre: "rock" });
    await band.update({ name: "Katy Perry", genre: "pop" });
    expect(band.name).toBe("Katy Perry");
    expect(band.genre).toBe("pop");
  });

  test("can update a Musician", async () => {
    // TODO - test updating a musician
    const musician = await Musician.create({
      name: "Dave Grohl",
      instrument: "guitar",
    });
    await musician.update({ name: "Lisa Simpson", instrument: "saxophone" });
    expect(musician.name).toBe("Lisa Simpson");
    expect(musician.instrument).toBe("saxophone");
  });

  test("can delete a Band", async () => {
    // TODO - test deleting a band
    const band = await Band.create({ name: "Nirvana", genre: "rock" });
    await band.destroy();
    const foundBand = await Song.findByPk(band.id);
    expect(foundBand).toBe(null);
  });

  test("can delete a Musician", async () => {
    // TODO - test deleting a musician
    const musician = await Musician.create({
      name: "Dave Grohl",
      instrument: "guitar",
    });
    await musician.destroy();
    const foundMusician = await Song.findByPk(musician.id);
    expect(foundMusician).toBe(null);
  });

  test("can create a Song", async () => {
    // TODO - test creating a song
    const song = await Song.create({
      title: "Smells Like Teen Spirit",
      year: 1991,
      length: 343,
    });
    expect(song).toBeInstanceOf(Song);
  });

  test("can update a Song", async () => {
    // TODO - test updating a song
    const song = await Song.create({
      title: "Smells Like Teen Spirit",
      year: 1991,
      length: 343,
    });
    await song.update({ title: "Come Together", year: 1969, length: 259 });
    expect(song.title).toBe("Come Together");
    expect(song.year).toBe(1969);
    expect(song.length).toBe(259);
  });

  test("can delete a Song", async () => {
    const song = await Song.create({
      title: "Smells Like Teen Spirit",
      year: 1991,
      length: 343,
    });
    await song.destroy();
    const foundSong = await Song.findByPk(song.id);
    expect(foundSong).toBe(null);
  });
});
