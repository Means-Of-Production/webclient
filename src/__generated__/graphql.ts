/* eslint-disable */
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** Date custom scalar type */
  Date: any;
};

export type Borrower = {
  __typename?: 'Borrower';
  BorrowerVerificationFlags: Array<Maybe<BorrowerVerificationFlags>>;
  fees: Array<Maybe<LibraryFee>>;
  library: Library;
  person: Person;
};

export enum BorrowerVerificationFlags {
  CurrentAddressVerified = 'CURRENT_ADDRESS_VERIFIED',
  EmailVerified = 'EMAIL_VERIFIED',
  IdScanned = 'ID_SCANNED',
  ItemRfidChip = 'ITEM_RFID_CHIP',
  PhoneNumber = 'PHONE_NUMBER'
}

export type DistributedLibrary = Library & {
  __typename?: 'DistributedLibrary';
  administrator: Person;
  id: Scalars['String'];
  items: Array<Maybe<Thing>>;
  location: Location;
  name: Scalars['String'];
};

export type DueDate = {
  __typename?: 'DueDate';
  date?: Maybe<Scalars['String']>;
};

export type Email = {
  __typename?: 'Email';
  value: Scalars['String'];
};

export enum FeeStatus {
  Forgiven = 'FORGIVEN',
  InPayment = 'IN_PAYMENT',
  Outstanding = 'OUTSTANDING',
  Paid = 'PAID'
}

export type Lender = {
  __typename?: 'Lender';
  id: Scalars['String'];
};

export type Library = {
  administrator: Person;
  id: Scalars['String'];
  items: Array<Maybe<Thing>>;
  location: Location;
  name: Scalars['String'];
};

export type LibraryFee = {
  __typename?: 'LibraryFee';
  amount: Money;
  chargedFor: Loan;
  status: FeeStatus;
};

export type LibrarySearchResult = {
  __typename?: 'LibrarySearchResult';
  library: Library;
  things: Array<Maybe<Thing>>;
};

export type Loan = {
  __typename?: 'Loan';
  borrower: Borrower;
  dateReturned?: Maybe<Scalars['String']>;
  dueDate: DueDate;
  id: Scalars['String'];
  item: Thing;
  permanentLoan: Scalars['Boolean'];
  returnLocation: Location;
  status: LoanStatus;
};

export enum LoanStatus {
  Borrowed = 'BORROWED',
  Overdue = 'OVERDUE',
  Returned = 'RETURNED',
  ReturnedDamaged = 'RETURNED_DAMAGED',
  ReturnStarted = 'RETURN_STARTED',
  WaitingOnLenderAcceptance = 'WAITING_ON_LENDER_ACCEPTANCE'
}

export type Location = PhysicalArea | PhysicalLocation;

export enum LocationTypeEnum {
  Distributed = 'Distributed',
  Physical = 'Physical',
  Virtual = 'Virtual'
}

export type Money = {
  __typename?: 'Money';
  amount: Scalars['Float'];
  currencyName: Scalars['String'];
  symbol: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  borrow: Loan;
};


export type MutationBorrowArgs = {
  libraryID: Scalars['String'];
  personID: Scalars['String'];
  thingID: Scalars['String'];
  until?: InputMaybe<Scalars['String']>;
};

export type Person = {
  __typename?: 'Person';
  emails: Array<Email>;
  id: Scalars['String'];
  name: PersonName;
};

export type PersonInput = {
  id: Scalars['String'];
};

export type PersonName = {
  __typename?: 'PersonName';
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  middleName?: Maybe<Scalars['String']>;
};

export type PhysicalArea = {
  __typename?: 'PhysicalArea';
  centerPoint: PhysicalLocation;
  distance: Scalars['Float'];
};

export type PhysicalLocation = {
  __typename?: 'PhysicalLocation';
  apartment?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  latitude?: Maybe<Scalars['String']>;
  longitude?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  streetAddress?: Maybe<Scalars['String']>;
  streetName?: Maybe<Scalars['String']>;
  zipcode?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  allLibraries: Array<Library>;
  currentUser?: Maybe<User>;
  librariesForPerson: Array<Library>;
  loansForLibrary: Array<Loan>;
  loansForPerson: Array<Loan>;
  titleSearchResults: Array<TitleSearchResult>;
};


export type QueryLibrariesForPersonArgs = {
  person: PersonInput;
};


export type QueryLoansForLibraryArgs = {
  hideNonReturn?: InputMaybe<Scalars['Boolean']>;
  libraryID: Scalars['String'];
};


export type QueryLoansForPersonArgs = {
  hideNonReturn?: InputMaybe<Scalars['Boolean']>;
  person: PersonInput;
};


export type QueryTitleSearchResultsArgs = {
  personID: Scalars['String'];
  searchRequest?: InputMaybe<TitleSearchRequest>;
};

export type SimpleLibrary = Library & {
  __typename?: 'SimpleLibrary';
  administrator: Person;
  id: Scalars['String'];
  items: Array<Maybe<Thing>>;
  location: Location;
  name: Scalars['String'];
};

export type Thing = {
  __typename?: 'Thing';
  id: Scalars['String'];
  imageUrls: Array<Scalars['String']>;
  owner: Lender;
  requiredBorrowerFlags: Array<BorrowerVerificationFlags>;
  status: ThingStatus;
  storageLocation: Location;
  title: ThingTitle;
};

export enum ThingStatus {
  Borrowed = 'BORROWED',
  Damaged = 'DAMAGED',
  Ready = 'READY',
  Reserved = 'RESERVED'
}

export type ThingTitle = {
  __typename?: 'ThingTitle';
  description?: Maybe<Scalars['String']>;
  isbn?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  upc?: Maybe<Scalars['String']>;
};

export type TitleSearchRequest = {
  searchText?: InputMaybe<Scalars['String']>;
};

export type TitleSearchResult = {
  __typename?: 'TitleSearchResult';
  libraryResults: Array<Maybe<LibrarySearchResult>>;
  title: ThingTitle;
};

export type User = {
  __typename?: 'User';
  email?: Maybe<Email>;
  roles?: Maybe<Array<UserRoles>>;
};

export type UserInput = {
  email: Scalars['String'];
};

export enum UserRoles {
  LibraryAdmin = 'LIBRARY_ADMIN',
  LibraryUser = 'LIBRARY_USER',
  PlatformAdmin = 'PLATFORM_ADMIN'
}

export type VirtualLocation = {
  __typename?: 'VirtualLocation';
  url?: Maybe<Scalars['String']>;
};
