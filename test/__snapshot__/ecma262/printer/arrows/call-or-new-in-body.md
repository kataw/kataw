# Kataw parser test case


### Printer Options

`````js
{
  printWidth: 20,
}
`````

## Input

`````js
() => foo({
key: value});

() => foo?.bar({
key: value});

() => new Foo({
key: value});

const a31 = () => new Foo({
key: value});

call(() => foo({
key: value}));

call(() => new Foo({
key: value}));

call(() => foo({
key: value}), second);


[() => new Foo({
key: value}), second];

a = {b: () => foo({
key: value})};

a = {b: () => new Foo({
key: value})};

a = () => foo({
key: value});

a = () => new Foo({
key: value});

function a() {return () => foo({
key: value});}
function a() {return () => new Foo({
key: value});}

const {a11 = () => foo({
key: value})} = {}

const {a12 = () => new Foo({
key: value})} = {}

loooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooog = () => foo({
key: value});

loooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooog = () => new Foo({
key: value});

a = () => loooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooog({
key: value});

a = () => new loooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooog({
key: value});

(loooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooog) => foo({
key: value});

(loooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooog) => new Foo({
key: value});

a = (greeting = "hello", greeted = '"World"', silent = false, onMouseOver) => foo({
key: value});

a = ({greeting = "hello", greeted = '"World"', silent = false, onMouseOver}) => foo({
key: value});

const zoo = test
  ? (
      greeting = "hello",
      greeted = '"World"',
      silent = false,
onMouseOver
) => foo({
      key: value,
})
  : (
      greeting = "hello", greeted = '"World"',
      silent = false,
      onMouseOver
      ) => new Foo({
      key: value,
});

a = a || ((
      greeting = "hello", greeted = '"World"',
      silent = false,
      onMouseOver
      ) => new Foo({
      key: value,
}));

function bar(a = (
      greeting = "hello", greeted = '"World"',
      silent = false,
      onMouseOver
      ) => new Foo({
      key: value,
})) {}

function* bar() {
yield (
      greeting = "hello", greeted = '"World"',
      silent = false,
      onMouseOver
      ) => new Foo({
      key: value,
})
}

async function* bar() {
await ((
      greeting = "hello", greeted = '"World"',
      silent = false,
      onMouseOver
      ) => new Foo({
      key: value,
}))
}

// #5733
expect(
  () => new GraphQLObjectType({
      field1: 'foo',
      field2: 'bar'
  })
);
() => new GraphQLObjectType({
  field1: 'foo',
  field2: 'bar'
});
new Foo(
  () => new FooBar({
    field1: 1,
    field2: 2
  })
);
() =>  foo({
  bar,
});
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "asyncKeyword": null,
                "typeParameters": null,
                "arrowPatameterList": {
                    "kind": 342,
                    "parameters": [],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 1,
                    "end": 1
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 2,
                    "end": 5
                },
                "contents": {
                    "kind": 131,
                    "expression": {
                        "kind": 134299649,
                        "text": "foo",
                        "rawText": "foo",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 5,
                        "end": 9
                    },
                    "argumentList": {
                        "kind": 256,
                        "elements": [
                            {
                                "kind": 220,
                                "propertyList": {
                                    "kind": 218,
                                    "properties": [
                                        {
                                            "kind": 219,
                                            "asteriskToken": null,
                                            "left": {
                                                "kind": 134299649,
                                                "text": "key",
                                                "rawText": "key",
                                                "flags": 97,
                                                "transformFlags": 0,
                                                "start": 11,
                                                "end": 15
                                            },
                                            "right": {
                                                "kind": 134299649,
                                                "text": "value",
                                                "rawText": "value",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 16,
                                                "end": 22
                                            },
                                            "flags": 33,
                                            "transformFlags": 128,
                                            "start": 11,
                                            "end": 22
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 17,
                                    "transformFlags": 0,
                                    "start": 11,
                                    "end": 22
                                },
                                "flags": 49,
                                "transformFlags": 8,
                                "start": 10,
                                "end": 23
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 10,
                        "end": 23
                    },
                    "flags": 268435488,
                    "transformFlags": 1,
                    "start": 5,
                    "end": 24
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 0,
                "end": 24
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 25
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "asyncKeyword": null,
                "typeParameters": null,
                "arrowPatameterList": {
                    "kind": 342,
                    "parameters": [],
                    "trailingComma": false,
                    "flags": 33,
                    "transformFlags": 0,
                    "start": 28,
                    "end": 28
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 29,
                    "end": 32
                },
                "contents": {
                    "kind": 205,
                    "chainToken": {
                        "kind": 393240,
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 36,
                        "end": 38
                    },
                    "member": {
                        "kind": 134299649,
                        "text": "foo",
                        "rawText": "foo",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 32,
                        "end": 36
                    },
                    "chain": {
                        "kind": 204,
                        "chain": {
                            "kind": 302,
                            "chain": {
                                "kind": 202,
                                "chain": null,
                                "expression": {
                                    "kind": 134299649,
                                    "text": "bar",
                                    "rawText": "bar",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 38,
                                    "end": 41
                                },
                                "flags": 536870944,
                                "transformFlags": 2,
                                "start": 38,
                                "end": 41
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 38,
                            "end": 41
                        },
                        "typeArguments": null,
                        "argumentList": {
                            "kind": 256,
                            "elements": [
                                {
                                    "kind": 220,
                                    "propertyList": {
                                        "kind": 218,
                                        "properties": [
                                            {
                                                "kind": 219,
                                                "asteriskToken": null,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": "key",
                                                    "rawText": "key",
                                                    "flags": 97,
                                                    "transformFlags": 0,
                                                    "start": 43,
                                                    "end": 47
                                                },
                                                "right": {
                                                    "kind": 134299649,
                                                    "text": "value",
                                                    "rawText": "value",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 48,
                                                    "end": 54
                                                },
                                                "flags": 33,
                                                "transformFlags": 128,
                                                "start": 43,
                                                "end": 54
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 17,
                                        "transformFlags": 0,
                                        "start": 43,
                                        "end": 54
                                    },
                                    "flags": 49,
                                    "transformFlags": 8,
                                    "start": 42,
                                    "end": 55
                                }
                            ],
                            "trailingComma": false,
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 42,
                            "end": 55
                        },
                        "flags": 268435488,
                        "transformFlags": 1,
                        "start": 41,
                        "end": 56
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 32,
                    "end": 56
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 25,
                "end": 56
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 25,
            "end": 57
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "asyncKeyword": null,
                "typeParameters": null,
                "arrowPatameterList": {
                    "kind": 342,
                    "parameters": [],
                    "trailingComma": false,
                    "flags": 33,
                    "transformFlags": 0,
                    "start": 60,
                    "end": 60
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 61,
                    "end": 64
                },
                "contents": {
                    "kind": 210,
                    "newKeyword": {
                        "kind": 138477661,
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 64,
                        "end": 68
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "Foo",
                        "rawText": "Foo",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 68,
                        "end": 72
                    },
                    "argumentList": {
                        "kind": 256,
                        "elements": [
                            {
                                "kind": 220,
                                "propertyList": {
                                    "kind": 218,
                                    "properties": [
                                        {
                                            "kind": 219,
                                            "asteriskToken": null,
                                            "left": {
                                                "kind": 134299649,
                                                "text": "key",
                                                "rawText": "key",
                                                "flags": 97,
                                                "transformFlags": 0,
                                                "start": 74,
                                                "end": 78
                                            },
                                            "right": {
                                                "kind": 134299649,
                                                "text": "value",
                                                "rawText": "value",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 79,
                                                "end": 85
                                            },
                                            "flags": 33,
                                            "transformFlags": 128,
                                            "start": 74,
                                            "end": 85
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 17,
                                    "transformFlags": 0,
                                    "start": 74,
                                    "end": 85
                                },
                                "flags": 49,
                                "transformFlags": 8,
                                "start": 73,
                                "end": 86
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 73,
                        "end": 86
                    },
                    "flags": 96,
                    "transformFlags": 2048,
                    "start": 64,
                    "end": 87
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 57,
                "end": 87
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 57,
            "end": 88
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 37757004,
                "flags": 81,
                "transformFlags": 0,
                "start": 88,
                "end": 95
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "a31",
                            "rawText": "a31",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 95,
                            "end": 99
                        },
                        "type": null,
                        "initializer": {
                            "kind": 271,
                            "asyncKeyword": null,
                            "typeParameters": null,
                            "arrowPatameterList": {
                                "kind": 342,
                                "parameters": [],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 103,
                                "end": 103
                            },
                            "returnType": null,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 104,
                                "end": 107
                            },
                            "contents": {
                                "kind": 210,
                                "newKeyword": {
                                    "kind": 138477661,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 107,
                                    "end": 111
                                },
                                "expression": {
                                    "kind": 134299649,
                                    "text": "Foo",
                                    "rawText": "Foo",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 111,
                                    "end": 115
                                },
                                "argumentList": {
                                    "kind": 256,
                                    "elements": [
                                        {
                                            "kind": 220,
                                            "propertyList": {
                                                "kind": 218,
                                                "properties": [
                                                    {
                                                        "kind": 219,
                                                        "asteriskToken": null,
                                                        "left": {
                                                            "kind": 134299649,
                                                            "text": "key",
                                                            "rawText": "key",
                                                            "flags": 97,
                                                            "transformFlags": 0,
                                                            "start": 117,
                                                            "end": 121
                                                        },
                                                        "right": {
                                                            "kind": 134299649,
                                                            "text": "value",
                                                            "rawText": "value",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 122,
                                                            "end": 128
                                                        },
                                                        "flags": 33,
                                                        "transformFlags": 128,
                                                        "start": 117,
                                                        "end": 128
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 17,
                                                "transformFlags": 0,
                                                "start": 117,
                                                "end": 128
                                            },
                                            "flags": 49,
                                            "transformFlags": 8,
                                            "start": 116,
                                            "end": 129
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 116,
                                    "end": 129
                                },
                                "flags": 96,
                                "transformFlags": 2048,
                                "start": 107,
                                "end": 130
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 101,
                            "end": 130
                        },
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 95,
                        "end": 130
                    }
                ],
                "flags": 16777232,
                "transformFlags": 0,
                "start": 95,
                "end": 130
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 88,
            "end": 131
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "call",
                    "rawText": "call",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 131,
                    "end": 137
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 271,
                            "asyncKeyword": null,
                            "typeParameters": null,
                            "arrowPatameterList": {
                                "kind": 342,
                                "parameters": [],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 139,
                                "end": 139
                            },
                            "returnType": null,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 140,
                                "end": 143
                            },
                            "contents": {
                                "kind": 131,
                                "expression": {
                                    "kind": 134299649,
                                    "text": "foo",
                                    "rawText": "foo",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 143,
                                    "end": 147
                                },
                                "argumentList": {
                                    "kind": 256,
                                    "elements": [
                                        {
                                            "kind": 220,
                                            "propertyList": {
                                                "kind": 218,
                                                "properties": [
                                                    {
                                                        "kind": 219,
                                                        "asteriskToken": null,
                                                        "left": {
                                                            "kind": 134299649,
                                                            "text": "key",
                                                            "rawText": "key",
                                                            "flags": 97,
                                                            "transformFlags": 0,
                                                            "start": 149,
                                                            "end": 153
                                                        },
                                                        "right": {
                                                            "kind": 134299649,
                                                            "text": "value",
                                                            "rawText": "value",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 154,
                                                            "end": 160
                                                        },
                                                        "flags": 33,
                                                        "transformFlags": 128,
                                                        "start": 149,
                                                        "end": 160
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 17,
                                                "transformFlags": 0,
                                                "start": 149,
                                                "end": 160
                                            },
                                            "flags": 49,
                                            "transformFlags": 8,
                                            "start": 148,
                                            "end": 161
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 148,
                                    "end": 161
                                },
                                "flags": 268435488,
                                "transformFlags": 1,
                                "start": 143,
                                "end": 162
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 138,
                            "end": 162
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 138,
                    "end": 162
                },
                "flags": 268435488,
                "transformFlags": 1,
                "start": 131,
                "end": 163
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 131,
            "end": 164
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "call",
                    "rawText": "call",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 164,
                    "end": 170
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 271,
                            "asyncKeyword": null,
                            "typeParameters": null,
                            "arrowPatameterList": {
                                "kind": 342,
                                "parameters": [],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 172,
                                "end": 172
                            },
                            "returnType": null,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 173,
                                "end": 176
                            },
                            "contents": {
                                "kind": 210,
                                "newKeyword": {
                                    "kind": 138477661,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 176,
                                    "end": 180
                                },
                                "expression": {
                                    "kind": 134299649,
                                    "text": "Foo",
                                    "rawText": "Foo",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 180,
                                    "end": 184
                                },
                                "argumentList": {
                                    "kind": 256,
                                    "elements": [
                                        {
                                            "kind": 220,
                                            "propertyList": {
                                                "kind": 218,
                                                "properties": [
                                                    {
                                                        "kind": 219,
                                                        "asteriskToken": null,
                                                        "left": {
                                                            "kind": 134299649,
                                                            "text": "key",
                                                            "rawText": "key",
                                                            "flags": 97,
                                                            "transformFlags": 0,
                                                            "start": 186,
                                                            "end": 190
                                                        },
                                                        "right": {
                                                            "kind": 134299649,
                                                            "text": "value",
                                                            "rawText": "value",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 191,
                                                            "end": 197
                                                        },
                                                        "flags": 33,
                                                        "transformFlags": 128,
                                                        "start": 186,
                                                        "end": 197
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 17,
                                                "transformFlags": 0,
                                                "start": 186,
                                                "end": 197
                                            },
                                            "flags": 49,
                                            "transformFlags": 8,
                                            "start": 185,
                                            "end": 198
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 185,
                                    "end": 198
                                },
                                "flags": 96,
                                "transformFlags": 2048,
                                "start": 176,
                                "end": 199
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 171,
                            "end": 199
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 171,
                    "end": 199
                },
                "flags": 268435488,
                "transformFlags": 1,
                "start": 164,
                "end": 200
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 164,
            "end": 201
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "call",
                    "rawText": "call",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 201,
                    "end": 207
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 271,
                            "asyncKeyword": null,
                            "typeParameters": null,
                            "arrowPatameterList": {
                                "kind": 342,
                                "parameters": [],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 209,
                                "end": 209
                            },
                            "returnType": null,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 210,
                                "end": 213
                            },
                            "contents": {
                                "kind": 131,
                                "expression": {
                                    "kind": 134299649,
                                    "text": "foo",
                                    "rawText": "foo",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 213,
                                    "end": 217
                                },
                                "argumentList": {
                                    "kind": 256,
                                    "elements": [
                                        {
                                            "kind": 220,
                                            "propertyList": {
                                                "kind": 218,
                                                "properties": [
                                                    {
                                                        "kind": 219,
                                                        "asteriskToken": null,
                                                        "left": {
                                                            "kind": 134299649,
                                                            "text": "key",
                                                            "rawText": "key",
                                                            "flags": 97,
                                                            "transformFlags": 0,
                                                            "start": 219,
                                                            "end": 223
                                                        },
                                                        "right": {
                                                            "kind": 134299649,
                                                            "text": "value",
                                                            "rawText": "value",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 224,
                                                            "end": 230
                                                        },
                                                        "flags": 33,
                                                        "transformFlags": 128,
                                                        "start": 219,
                                                        "end": 230
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 17,
                                                "transformFlags": 0,
                                                "start": 219,
                                                "end": 230
                                            },
                                            "flags": 49,
                                            "transformFlags": 8,
                                            "start": 218,
                                            "end": 231
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 218,
                                    "end": 231
                                },
                                "flags": 268435488,
                                "transformFlags": 1,
                                "start": 213,
                                "end": 232
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 208,
                            "end": 232
                        },
                        {
                            "kind": 134299649,
                            "text": "second",
                            "rawText": "second",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 233,
                            "end": 240
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 208,
                    "end": 240
                },
                "flags": 268435488,
                "transformFlags": 1,
                "start": 201,
                "end": 241
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 201,
            "end": 242
        },
        {
            "kind": 120,
            "expression": {
                "kind": 119,
                "elementList": {
                    "kind": 270,
                    "elements": [
                        {
                            "kind": 271,
                            "asyncKeyword": null,
                            "typeParameters": null,
                            "arrowPatameterList": {
                                "kind": 342,
                                "parameters": [],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 247,
                                "end": 247
                            },
                            "returnType": null,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 248,
                                "end": 251
                            },
                            "contents": {
                                "kind": 210,
                                "newKeyword": {
                                    "kind": 138477661,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 251,
                                    "end": 255
                                },
                                "expression": {
                                    "kind": 134299649,
                                    "text": "Foo",
                                    "rawText": "Foo",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 255,
                                    "end": 259
                                },
                                "argumentList": {
                                    "kind": 256,
                                    "elements": [
                                        {
                                            "kind": 220,
                                            "propertyList": {
                                                "kind": 218,
                                                "properties": [
                                                    {
                                                        "kind": 219,
                                                        "asteriskToken": null,
                                                        "left": {
                                                            "kind": 134299649,
                                                            "text": "key",
                                                            "rawText": "key",
                                                            "flags": 97,
                                                            "transformFlags": 0,
                                                            "start": 261,
                                                            "end": 265
                                                        },
                                                        "right": {
                                                            "kind": 134299649,
                                                            "text": "value",
                                                            "rawText": "value",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 266,
                                                            "end": 272
                                                        },
                                                        "flags": 33,
                                                        "transformFlags": 128,
                                                        "start": 261,
                                                        "end": 272
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 17,
                                                "transformFlags": 0,
                                                "start": 261,
                                                "end": 272
                                            },
                                            "flags": 49,
                                            "transformFlags": 8,
                                            "start": 260,
                                            "end": 273
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 260,
                                    "end": 273
                                },
                                "flags": 96,
                                "transformFlags": 2048,
                                "start": 251,
                                "end": 274
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 246,
                            "end": 274
                        },
                        {
                            "kind": 134299649,
                            "text": "second",
                            "rawText": "second",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 275,
                            "end": 282
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 246,
                    "end": 282
                },
                "flags": 33,
                "transformFlags": 8,
                "start": 242,
                "end": 283
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 242,
            "end": 284
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 284,
                    "end": 287
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 287,
                    "end": 289
                },
                "right": {
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [
                            {
                                "kind": 219,
                                "asteriskToken": null,
                                "left": {
                                    "kind": 134299649,
                                    "text": "b",
                                    "rawText": "b",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 291,
                                    "end": 292
                                },
                                "right": {
                                    "kind": 271,
                                    "asyncKeyword": null,
                                    "typeParameters": null,
                                    "arrowPatameterList": {
                                        "kind": 342,
                                        "parameters": [],
                                        "trailingComma": false,
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 295,
                                        "end": 295
                                    },
                                    "returnType": null,
                                    "arrowToken": {
                                        "kind": 10,
                                        "flags": 64,
                                        "transformFlags": 0,
                                        "start": 296,
                                        "end": 299
                                    },
                                    "contents": {
                                        "kind": 131,
                                        "expression": {
                                            "kind": 134299649,
                                            "text": "foo",
                                            "rawText": "foo",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 299,
                                            "end": 303
                                        },
                                        "argumentList": {
                                            "kind": 256,
                                            "elements": [
                                                {
                                                    "kind": 220,
                                                    "propertyList": {
                                                        "kind": 218,
                                                        "properties": [
                                                            {
                                                                "kind": 219,
                                                                "asteriskToken": null,
                                                                "left": {
                                                                    "kind": 134299649,
                                                                    "text": "key",
                                                                    "rawText": "key",
                                                                    "flags": 97,
                                                                    "transformFlags": 0,
                                                                    "start": 305,
                                                                    "end": 309
                                                                },
                                                                "right": {
                                                                    "kind": 134299649,
                                                                    "text": "value",
                                                                    "rawText": "value",
                                                                    "flags": 96,
                                                                    "transformFlags": 0,
                                                                    "start": 310,
                                                                    "end": 316
                                                                },
                                                                "flags": 33,
                                                                "transformFlags": 128,
                                                                "start": 305,
                                                                "end": 316
                                                            }
                                                        ],
                                                        "trailingComma": false,
                                                        "flags": 17,
                                                        "transformFlags": 0,
                                                        "start": 305,
                                                        "end": 316
                                                    },
                                                    "flags": 49,
                                                    "transformFlags": 8,
                                                    "start": 304,
                                                    "end": 317
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 304,
                                            "end": 317
                                        },
                                        "flags": 268435488,
                                        "transformFlags": 1,
                                        "start": 299,
                                        "end": 318
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 293,
                                    "end": 318
                                },
                                "flags": 32,
                                "transformFlags": 128,
                                "start": 291,
                                "end": 318
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 291,
                        "end": 318
                    },
                    "flags": 48,
                    "transformFlags": 8,
                    "start": 289,
                    "end": 319
                },
                "flags": 0,
                "transformFlags": 128,
                "start": 284,
                "end": 319
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 284,
            "end": 320
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 320,
                    "end": 323
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 323,
                    "end": 325
                },
                "right": {
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [
                            {
                                "kind": 219,
                                "asteriskToken": null,
                                "left": {
                                    "kind": 134299649,
                                    "text": "b",
                                    "rawText": "b",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 327,
                                    "end": 328
                                },
                                "right": {
                                    "kind": 271,
                                    "asyncKeyword": null,
                                    "typeParameters": null,
                                    "arrowPatameterList": {
                                        "kind": 342,
                                        "parameters": [],
                                        "trailingComma": false,
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 331,
                                        "end": 331
                                    },
                                    "returnType": null,
                                    "arrowToken": {
                                        "kind": 10,
                                        "flags": 64,
                                        "transformFlags": 0,
                                        "start": 332,
                                        "end": 335
                                    },
                                    "contents": {
                                        "kind": 210,
                                        "newKeyword": {
                                            "kind": 138477661,
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 335,
                                            "end": 339
                                        },
                                        "expression": {
                                            "kind": 134299649,
                                            "text": "Foo",
                                            "rawText": "Foo",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 339,
                                            "end": 343
                                        },
                                        "argumentList": {
                                            "kind": 256,
                                            "elements": [
                                                {
                                                    "kind": 220,
                                                    "propertyList": {
                                                        "kind": 218,
                                                        "properties": [
                                                            {
                                                                "kind": 219,
                                                                "asteriskToken": null,
                                                                "left": {
                                                                    "kind": 134299649,
                                                                    "text": "key",
                                                                    "rawText": "key",
                                                                    "flags": 97,
                                                                    "transformFlags": 0,
                                                                    "start": 345,
                                                                    "end": 349
                                                                },
                                                                "right": {
                                                                    "kind": 134299649,
                                                                    "text": "value",
                                                                    "rawText": "value",
                                                                    "flags": 96,
                                                                    "transformFlags": 0,
                                                                    "start": 350,
                                                                    "end": 356
                                                                },
                                                                "flags": 33,
                                                                "transformFlags": 128,
                                                                "start": 345,
                                                                "end": 356
                                                            }
                                                        ],
                                                        "trailingComma": false,
                                                        "flags": 17,
                                                        "transformFlags": 0,
                                                        "start": 345,
                                                        "end": 356
                                                    },
                                                    "flags": 49,
                                                    "transformFlags": 8,
                                                    "start": 344,
                                                    "end": 357
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 344,
                                            "end": 357
                                        },
                                        "flags": 96,
                                        "transformFlags": 2048,
                                        "start": 335,
                                        "end": 358
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 329,
                                    "end": 358
                                },
                                "flags": 32,
                                "transformFlags": 128,
                                "start": 327,
                                "end": 358
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 327,
                        "end": 358
                    },
                    "flags": 48,
                    "transformFlags": 8,
                    "start": 325,
                    "end": 359
                },
                "flags": 0,
                "transformFlags": 128,
                "start": 320,
                "end": 359
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 320,
            "end": 360
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 360,
                    "end": 363
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 363,
                    "end": 365
                },
                "right": {
                    "kind": 271,
                    "asyncKeyword": null,
                    "typeParameters": null,
                    "arrowPatameterList": {
                        "kind": 342,
                        "parameters": [],
                        "trailingComma": false,
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 367,
                        "end": 367
                    },
                    "returnType": null,
                    "arrowToken": {
                        "kind": 10,
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 368,
                        "end": 371
                    },
                    "contents": {
                        "kind": 131,
                        "expression": {
                            "kind": 134299649,
                            "text": "foo",
                            "rawText": "foo",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 371,
                            "end": 375
                        },
                        "argumentList": {
                            "kind": 256,
                            "elements": [
                                {
                                    "kind": 220,
                                    "propertyList": {
                                        "kind": 218,
                                        "properties": [
                                            {
                                                "kind": 219,
                                                "asteriskToken": null,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": "key",
                                                    "rawText": "key",
                                                    "flags": 97,
                                                    "transformFlags": 0,
                                                    "start": 377,
                                                    "end": 381
                                                },
                                                "right": {
                                                    "kind": 134299649,
                                                    "text": "value",
                                                    "rawText": "value",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 382,
                                                    "end": 388
                                                },
                                                "flags": 33,
                                                "transformFlags": 128,
                                                "start": 377,
                                                "end": 388
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 17,
                                        "transformFlags": 0,
                                        "start": 377,
                                        "end": 388
                                    },
                                    "flags": 49,
                                    "transformFlags": 8,
                                    "start": 376,
                                    "end": 389
                                }
                            ],
                            "trailingComma": false,
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 376,
                            "end": 389
                        },
                        "flags": 268435488,
                        "transformFlags": 1,
                        "start": 371,
                        "end": 390
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 365,
                    "end": 390
                },
                "flags": 0,
                "transformFlags": 128,
                "start": 360,
                "end": 390
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 360,
            "end": 391
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 391,
                    "end": 394
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 394,
                    "end": 396
                },
                "right": {
                    "kind": 271,
                    "asyncKeyword": null,
                    "typeParameters": null,
                    "arrowPatameterList": {
                        "kind": 342,
                        "parameters": [],
                        "trailingComma": false,
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 398,
                        "end": 398
                    },
                    "returnType": null,
                    "arrowToken": {
                        "kind": 10,
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 399,
                        "end": 402
                    },
                    "contents": {
                        "kind": 210,
                        "newKeyword": {
                            "kind": 138477661,
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 402,
                            "end": 406
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "Foo",
                            "rawText": "Foo",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 406,
                            "end": 410
                        },
                        "argumentList": {
                            "kind": 256,
                            "elements": [
                                {
                                    "kind": 220,
                                    "propertyList": {
                                        "kind": 218,
                                        "properties": [
                                            {
                                                "kind": 219,
                                                "asteriskToken": null,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": "key",
                                                    "rawText": "key",
                                                    "flags": 97,
                                                    "transformFlags": 0,
                                                    "start": 412,
                                                    "end": 416
                                                },
                                                "right": {
                                                    "kind": 134299649,
                                                    "text": "value",
                                                    "rawText": "value",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 417,
                                                    "end": 423
                                                },
                                                "flags": 33,
                                                "transformFlags": 128,
                                                "start": 412,
                                                "end": 423
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 17,
                                        "transformFlags": 0,
                                        "start": 412,
                                        "end": 423
                                    },
                                    "flags": 49,
                                    "transformFlags": 8,
                                    "start": 411,
                                    "end": 424
                                }
                            ],
                            "trailingComma": false,
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 411,
                            "end": 424
                        },
                        "flags": 96,
                        "transformFlags": 2048,
                        "start": 402,
                        "end": 425
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 396,
                    "end": 425
                },
                "flags": 0,
                "transformFlags": 128,
                "start": 391,
                "end": 425
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 391,
            "end": 426
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "transformFlags": 0,
                "start": 426,
                "end": 436
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "a",
                "rawText": "a",
                "flags": 96,
                "transformFlags": 0,
                "start": 436,
                "end": 438
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "transformFlags": 0,
                "start": 439,
                "end": 439
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 161,
                            "returnKeyword": {
                                "kind": 37757022,
                                "flags": 80,
                                "transformFlags": 0,
                                "start": 442,
                                "end": 448
                            },
                            "expression": {
                                "kind": 271,
                                "asyncKeyword": null,
                                "typeParameters": null,
                                "arrowPatameterList": {
                                    "kind": 342,
                                    "parameters": [],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 450,
                                    "end": 450
                                },
                                "returnType": null,
                                "arrowToken": {
                                    "kind": 10,
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 451,
                                    "end": 454
                                },
                                "contents": {
                                    "kind": 131,
                                    "expression": {
                                        "kind": 134299649,
                                        "text": "foo",
                                        "rawText": "foo",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 454,
                                        "end": 458
                                    },
                                    "argumentList": {
                                        "kind": 256,
                                        "elements": [
                                            {
                                                "kind": 220,
                                                "propertyList": {
                                                    "kind": 218,
                                                    "properties": [
                                                        {
                                                            "kind": 219,
                                                            "asteriskToken": null,
                                                            "left": {
                                                                "kind": 134299649,
                                                                "text": "key",
                                                                "rawText": "key",
                                                                "flags": 97,
                                                                "transformFlags": 0,
                                                                "start": 460,
                                                                "end": 464
                                                            },
                                                            "right": {
                                                                "kind": 134299649,
                                                                "text": "value",
                                                                "rawText": "value",
                                                                "flags": 96,
                                                                "transformFlags": 0,
                                                                "start": 465,
                                                                "end": 471
                                                            },
                                                            "flags": 33,
                                                            "transformFlags": 128,
                                                            "start": 460,
                                                            "end": 471
                                                        }
                                                    ],
                                                    "trailingComma": false,
                                                    "flags": 17,
                                                    "transformFlags": 0,
                                                    "start": 460,
                                                    "end": 471
                                                },
                                                "flags": 49,
                                                "transformFlags": 8,
                                                "start": 459,
                                                "end": 472
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 459,
                                        "end": 472
                                    },
                                    "flags": 268435488,
                                    "transformFlags": 1,
                                    "start": 454,
                                    "end": 473
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 448,
                                "end": 473
                            },
                            "flags": 80,
                            "transformFlags": 256,
                            "start": 442,
                            "end": 474
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 442,
                    "end": 474
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 440,
                "end": 475
            },
            "returnType": null,
            "flags": 16,
            "transformFlags": 0,
            "start": 426,
            "end": 475
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "transformFlags": 0,
                "start": 475,
                "end": 484
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "a",
                "rawText": "a",
                "flags": 96,
                "transformFlags": 0,
                "start": 484,
                "end": 486
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "transformFlags": 0,
                "start": 487,
                "end": 487
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 161,
                            "returnKeyword": {
                                "kind": 37757022,
                                "flags": 80,
                                "transformFlags": 0,
                                "start": 490,
                                "end": 496
                            },
                            "expression": {
                                "kind": 271,
                                "asyncKeyword": null,
                                "typeParameters": null,
                                "arrowPatameterList": {
                                    "kind": 342,
                                    "parameters": [],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 498,
                                    "end": 498
                                },
                                "returnType": null,
                                "arrowToken": {
                                    "kind": 10,
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 499,
                                    "end": 502
                                },
                                "contents": {
                                    "kind": 210,
                                    "newKeyword": {
                                        "kind": 138477661,
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 502,
                                        "end": 506
                                    },
                                    "expression": {
                                        "kind": 134299649,
                                        "text": "Foo",
                                        "rawText": "Foo",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 506,
                                        "end": 510
                                    },
                                    "argumentList": {
                                        "kind": 256,
                                        "elements": [
                                            {
                                                "kind": 220,
                                                "propertyList": {
                                                    "kind": 218,
                                                    "properties": [
                                                        {
                                                            "kind": 219,
                                                            "asteriskToken": null,
                                                            "left": {
                                                                "kind": 134299649,
                                                                "text": "key",
                                                                "rawText": "key",
                                                                "flags": 97,
                                                                "transformFlags": 0,
                                                                "start": 512,
                                                                "end": 516
                                                            },
                                                            "right": {
                                                                "kind": 134299649,
                                                                "text": "value",
                                                                "rawText": "value",
                                                                "flags": 96,
                                                                "transformFlags": 0,
                                                                "start": 517,
                                                                "end": 523
                                                            },
                                                            "flags": 33,
                                                            "transformFlags": 128,
                                                            "start": 512,
                                                            "end": 523
                                                        }
                                                    ],
                                                    "trailingComma": false,
                                                    "flags": 17,
                                                    "transformFlags": 0,
                                                    "start": 512,
                                                    "end": 523
                                                },
                                                "flags": 49,
                                                "transformFlags": 8,
                                                "start": 511,
                                                "end": 524
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 511,
                                        "end": 524
                                    },
                                    "flags": 96,
                                    "transformFlags": 2048,
                                    "start": 502,
                                    "end": 525
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 496,
                                "end": 525
                            },
                            "flags": 80,
                            "transformFlags": 256,
                            "start": 490,
                            "end": 526
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 490,
                    "end": 526
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 488,
                "end": 527
            },
            "returnType": null,
            "flags": 16,
            "transformFlags": 0,
            "start": 475,
            "end": 527
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 37757004,
                "flags": 81,
                "transformFlags": 0,
                "start": 527,
                "end": 534
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 212,
                            "propertyList": {
                                "kind": 213,
                                "properties": [
                                    {
                                        "kind": 281,
                                        "ellipsisToken": null,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "a11",
                                            "rawText": "a11",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 536,
                                            "end": 539
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "right": {
                                            "kind": 271,
                                            "asyncKeyword": null,
                                            "typeParameters": null,
                                            "arrowPatameterList": {
                                                "kind": 342,
                                                "parameters": [],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 543,
                                                "end": 543
                                            },
                                            "returnType": null,
                                            "arrowToken": {
                                                "kind": 10,
                                                "flags": 64,
                                                "transformFlags": 0,
                                                "start": 544,
                                                "end": 547
                                            },
                                            "contents": {
                                                "kind": 131,
                                                "expression": {
                                                    "kind": 134299649,
                                                    "text": "foo",
                                                    "rawText": "foo",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 547,
                                                    "end": 551
                                                },
                                                "argumentList": {
                                                    "kind": 256,
                                                    "elements": [
                                                        {
                                                            "kind": 220,
                                                            "propertyList": {
                                                                "kind": 218,
                                                                "properties": [
                                                                    {
                                                                        "kind": 219,
                                                                        "asteriskToken": null,
                                                                        "left": {
                                                                            "kind": 134299649,
                                                                            "text": "key",
                                                                            "rawText": "key",
                                                                            "flags": 97,
                                                                            "transformFlags": 0,
                                                                            "start": 553,
                                                                            "end": 557
                                                                        },
                                                                        "right": {
                                                                            "kind": 134299649,
                                                                            "text": "value",
                                                                            "rawText": "value",
                                                                            "flags": 96,
                                                                            "transformFlags": 0,
                                                                            "start": 558,
                                                                            "end": 564
                                                                        },
                                                                        "flags": 33,
                                                                        "transformFlags": 128,
                                                                        "start": 553,
                                                                        "end": 564
                                                                    }
                                                                ],
                                                                "trailingComma": false,
                                                                "flags": 17,
                                                                "transformFlags": 0,
                                                                "start": 553,
                                                                "end": 564
                                                            },
                                                            "flags": 49,
                                                            "transformFlags": 8,
                                                            "start": 552,
                                                            "end": 565
                                                        }
                                                    ],
                                                    "trailingComma": false,
                                                    "flags": 32,
                                                    "transformFlags": 0,
                                                    "start": 552,
                                                    "end": 565
                                                },
                                                "flags": 268435488,
                                                "transformFlags": 1,
                                                "start": 547,
                                                "end": 566
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 541,
                                            "end": 566
                                        },
                                        "flags": 0,
                                        "transformFlags": 4096,
                                        "start": 536,
                                        "end": 566
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 536,
                                "end": 566
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 534,
                            "end": 567
                        },
                        "type": null,
                        "initializer": {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [],
                                "trailingComma": false,
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 571,
                                "end": 571
                            },
                            "flags": 48,
                            "transformFlags": 8,
                            "start": 569,
                            "end": 572
                        },
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 534,
                        "end": 572
                    }
                ],
                "flags": 16777232,
                "transformFlags": 0,
                "start": 534,
                "end": 572
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 527,
            "end": 572
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 37757004,
                "flags": 81,
                "transformFlags": 0,
                "start": 572,
                "end": 579
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 212,
                            "propertyList": {
                                "kind": 213,
                                "properties": [
                                    {
                                        "kind": 281,
                                        "ellipsisToken": null,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "a12",
                                            "rawText": "a12",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 581,
                                            "end": 584
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "right": {
                                            "kind": 271,
                                            "asyncKeyword": null,
                                            "typeParameters": null,
                                            "arrowPatameterList": {
                                                "kind": 342,
                                                "parameters": [],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 588,
                                                "end": 588
                                            },
                                            "returnType": null,
                                            "arrowToken": {
                                                "kind": 10,
                                                "flags": 64,
                                                "transformFlags": 0,
                                                "start": 589,
                                                "end": 592
                                            },
                                            "contents": {
                                                "kind": 210,
                                                "newKeyword": {
                                                    "kind": 138477661,
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 592,
                                                    "end": 596
                                                },
                                                "expression": {
                                                    "kind": 134299649,
                                                    "text": "Foo",
                                                    "rawText": "Foo",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 596,
                                                    "end": 600
                                                },
                                                "argumentList": {
                                                    "kind": 256,
                                                    "elements": [
                                                        {
                                                            "kind": 220,
                                                            "propertyList": {
                                                                "kind": 218,
                                                                "properties": [
                                                                    {
                                                                        "kind": 219,
                                                                        "asteriskToken": null,
                                                                        "left": {
                                                                            "kind": 134299649,
                                                                            "text": "key",
                                                                            "rawText": "key",
                                                                            "flags": 97,
                                                                            "transformFlags": 0,
                                                                            "start": 602,
                                                                            "end": 606
                                                                        },
                                                                        "right": {
                                                                            "kind": 134299649,
                                                                            "text": "value",
                                                                            "rawText": "value",
                                                                            "flags": 96,
                                                                            "transformFlags": 0,
                                                                            "start": 607,
                                                                            "end": 613
                                                                        },
                                                                        "flags": 33,
                                                                        "transformFlags": 128,
                                                                        "start": 602,
                                                                        "end": 613
                                                                    }
                                                                ],
                                                                "trailingComma": false,
                                                                "flags": 17,
                                                                "transformFlags": 0,
                                                                "start": 602,
                                                                "end": 613
                                                            },
                                                            "flags": 49,
                                                            "transformFlags": 8,
                                                            "start": 601,
                                                            "end": 614
                                                        }
                                                    ],
                                                    "trailingComma": false,
                                                    "flags": 32,
                                                    "transformFlags": 0,
                                                    "start": 601,
                                                    "end": 614
                                                },
                                                "flags": 96,
                                                "transformFlags": 2048,
                                                "start": 592,
                                                "end": 615
                                            },
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 586,
                                            "end": 615
                                        },
                                        "flags": 0,
                                        "transformFlags": 4096,
                                        "start": 581,
                                        "end": 615
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 581,
                                "end": 615
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 579,
                            "end": 616
                        },
                        "type": null,
                        "initializer": {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [],
                                "trailingComma": false,
                                "flags": 16,
                                "transformFlags": 0,
                                "start": 620,
                                "end": 620
                            },
                            "flags": 48,
                            "transformFlags": 8,
                            "start": 618,
                            "end": 621
                        },
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 579,
                        "end": 621
                    }
                ],
                "flags": 16777232,
                "transformFlags": 0,
                "start": 579,
                "end": 621
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 572,
            "end": 621
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "loooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooog",
                    "rawText": "loooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooog",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 621,
                    "end": 703
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 703,
                    "end": 705
                },
                "right": {
                    "kind": 271,
                    "asyncKeyword": null,
                    "typeParameters": null,
                    "arrowPatameterList": {
                        "kind": 342,
                        "parameters": [],
                        "trailingComma": false,
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 707,
                        "end": 707
                    },
                    "returnType": null,
                    "arrowToken": {
                        "kind": 10,
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 708,
                        "end": 711
                    },
                    "contents": {
                        "kind": 131,
                        "expression": {
                            "kind": 134299649,
                            "text": "foo",
                            "rawText": "foo",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 711,
                            "end": 715
                        },
                        "argumentList": {
                            "kind": 256,
                            "elements": [
                                {
                                    "kind": 220,
                                    "propertyList": {
                                        "kind": 218,
                                        "properties": [
                                            {
                                                "kind": 219,
                                                "asteriskToken": null,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": "key",
                                                    "rawText": "key",
                                                    "flags": 97,
                                                    "transformFlags": 0,
                                                    "start": 717,
                                                    "end": 721
                                                },
                                                "right": {
                                                    "kind": 134299649,
                                                    "text": "value",
                                                    "rawText": "value",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 722,
                                                    "end": 728
                                                },
                                                "flags": 33,
                                                "transformFlags": 128,
                                                "start": 717,
                                                "end": 728
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 17,
                                        "transformFlags": 0,
                                        "start": 717,
                                        "end": 728
                                    },
                                    "flags": 49,
                                    "transformFlags": 8,
                                    "start": 716,
                                    "end": 729
                                }
                            ],
                            "trailingComma": false,
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 716,
                            "end": 729
                        },
                        "flags": 268435488,
                        "transformFlags": 1,
                        "start": 711,
                        "end": 730
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 705,
                    "end": 730
                },
                "flags": 0,
                "transformFlags": 128,
                "start": 621,
                "end": 730
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 621,
            "end": 731
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "loooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooog",
                    "rawText": "loooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooog",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 731,
                    "end": 813
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 813,
                    "end": 815
                },
                "right": {
                    "kind": 271,
                    "asyncKeyword": null,
                    "typeParameters": null,
                    "arrowPatameterList": {
                        "kind": 342,
                        "parameters": [],
                        "trailingComma": false,
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 817,
                        "end": 817
                    },
                    "returnType": null,
                    "arrowToken": {
                        "kind": 10,
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 818,
                        "end": 821
                    },
                    "contents": {
                        "kind": 210,
                        "newKeyword": {
                            "kind": 138477661,
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 821,
                            "end": 825
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "Foo",
                            "rawText": "Foo",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 825,
                            "end": 829
                        },
                        "argumentList": {
                            "kind": 256,
                            "elements": [
                                {
                                    "kind": 220,
                                    "propertyList": {
                                        "kind": 218,
                                        "properties": [
                                            {
                                                "kind": 219,
                                                "asteriskToken": null,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": "key",
                                                    "rawText": "key",
                                                    "flags": 97,
                                                    "transformFlags": 0,
                                                    "start": 831,
                                                    "end": 835
                                                },
                                                "right": {
                                                    "kind": 134299649,
                                                    "text": "value",
                                                    "rawText": "value",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 836,
                                                    "end": 842
                                                },
                                                "flags": 33,
                                                "transformFlags": 128,
                                                "start": 831,
                                                "end": 842
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 17,
                                        "transformFlags": 0,
                                        "start": 831,
                                        "end": 842
                                    },
                                    "flags": 49,
                                    "transformFlags": 8,
                                    "start": 830,
                                    "end": 843
                                }
                            ],
                            "trailingComma": false,
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 830,
                            "end": 843
                        },
                        "flags": 96,
                        "transformFlags": 2048,
                        "start": 821,
                        "end": 844
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 815,
                    "end": 844
                },
                "flags": 0,
                "transformFlags": 128,
                "start": 731,
                "end": 844
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 731,
            "end": 845
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 845,
                    "end": 848
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 848,
                    "end": 850
                },
                "right": {
                    "kind": 271,
                    "asyncKeyword": null,
                    "typeParameters": null,
                    "arrowPatameterList": {
                        "kind": 342,
                        "parameters": [],
                        "trailingComma": false,
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 852,
                        "end": 852
                    },
                    "returnType": null,
                    "arrowToken": {
                        "kind": 10,
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 853,
                        "end": 856
                    },
                    "contents": {
                        "kind": 131,
                        "expression": {
                            "kind": 134299649,
                            "text": "loooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooog",
                            "rawText": "loooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooog",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 856,
                            "end": 937
                        },
                        "argumentList": {
                            "kind": 256,
                            "elements": [
                                {
                                    "kind": 220,
                                    "propertyList": {
                                        "kind": 218,
                                        "properties": [
                                            {
                                                "kind": 219,
                                                "asteriskToken": null,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": "key",
                                                    "rawText": "key",
                                                    "flags": 97,
                                                    "transformFlags": 0,
                                                    "start": 939,
                                                    "end": 943
                                                },
                                                "right": {
                                                    "kind": 134299649,
                                                    "text": "value",
                                                    "rawText": "value",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 944,
                                                    "end": 950
                                                },
                                                "flags": 33,
                                                "transformFlags": 128,
                                                "start": 939,
                                                "end": 950
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 17,
                                        "transformFlags": 0,
                                        "start": 939,
                                        "end": 950
                                    },
                                    "flags": 49,
                                    "transformFlags": 8,
                                    "start": 938,
                                    "end": 951
                                }
                            ],
                            "trailingComma": false,
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 938,
                            "end": 951
                        },
                        "flags": 268435488,
                        "transformFlags": 1,
                        "start": 856,
                        "end": 952
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 850,
                    "end": 952
                },
                "flags": 0,
                "transformFlags": 128,
                "start": 845,
                "end": 952
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 845,
            "end": 953
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 953,
                    "end": 956
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 956,
                    "end": 958
                },
                "right": {
                    "kind": 271,
                    "asyncKeyword": null,
                    "typeParameters": null,
                    "arrowPatameterList": {
                        "kind": 342,
                        "parameters": [],
                        "trailingComma": false,
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 960,
                        "end": 960
                    },
                    "returnType": null,
                    "arrowToken": {
                        "kind": 10,
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 961,
                        "end": 964
                    },
                    "contents": {
                        "kind": 210,
                        "newKeyword": {
                            "kind": 138477661,
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 964,
                            "end": 968
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "loooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooog",
                            "rawText": "loooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooog",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 968,
                            "end": 1049
                        },
                        "argumentList": {
                            "kind": 256,
                            "elements": [
                                {
                                    "kind": 220,
                                    "propertyList": {
                                        "kind": 218,
                                        "properties": [
                                            {
                                                "kind": 219,
                                                "asteriskToken": null,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": "key",
                                                    "rawText": "key",
                                                    "flags": 97,
                                                    "transformFlags": 0,
                                                    "start": 1051,
                                                    "end": 1055
                                                },
                                                "right": {
                                                    "kind": 134299649,
                                                    "text": "value",
                                                    "rawText": "value",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 1056,
                                                    "end": 1062
                                                },
                                                "flags": 33,
                                                "transformFlags": 128,
                                                "start": 1051,
                                                "end": 1062
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 17,
                                        "transformFlags": 0,
                                        "start": 1051,
                                        "end": 1062
                                    },
                                    "flags": 49,
                                    "transformFlags": 8,
                                    "start": 1050,
                                    "end": 1063
                                }
                            ],
                            "trailingComma": false,
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 1050,
                            "end": 1063
                        },
                        "flags": 96,
                        "transformFlags": 2048,
                        "start": 964,
                        "end": 1064
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 958,
                    "end": 1064
                },
                "flags": 0,
                "transformFlags": 128,
                "start": 953,
                "end": 1064
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 953,
            "end": 1065
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "asyncKeyword": null,
                "typeParameters": null,
                "arrowPatameterList": {
                    "kind": 342,
                    "parameters": [
                        {
                            "kind": 134299649,
                            "text": "loooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooog",
                            "rawText": "loooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooog",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 1068,
                            "end": 1148
                        }
                    ],
                    "trailingComma": false,
                    "flags": 33,
                    "transformFlags": 0,
                    "start": 1068,
                    "end": 1149
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 1149,
                    "end": 1152
                },
                "contents": {
                    "kind": 131,
                    "expression": {
                        "kind": 134299649,
                        "text": "foo",
                        "rawText": "foo",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 1152,
                        "end": 1156
                    },
                    "argumentList": {
                        "kind": 256,
                        "elements": [
                            {
                                "kind": 220,
                                "propertyList": {
                                    "kind": 218,
                                    "properties": [
                                        {
                                            "kind": 219,
                                            "asteriskToken": null,
                                            "left": {
                                                "kind": 134299649,
                                                "text": "key",
                                                "rawText": "key",
                                                "flags": 97,
                                                "transformFlags": 0,
                                                "start": 1158,
                                                "end": 1162
                                            },
                                            "right": {
                                                "kind": 134299649,
                                                "text": "value",
                                                "rawText": "value",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 1163,
                                                "end": 1169
                                            },
                                            "flags": 33,
                                            "transformFlags": 128,
                                            "start": 1158,
                                            "end": 1169
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 17,
                                    "transformFlags": 0,
                                    "start": 1158,
                                    "end": 1169
                                },
                                "flags": 49,
                                "transformFlags": 8,
                                "start": 1157,
                                "end": 1170
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 1157,
                        "end": 1170
                    },
                    "flags": 268435488,
                    "transformFlags": 1,
                    "start": 1152,
                    "end": 1171
                },
                "flags": 33,
                "transformFlags": 0,
                "start": 1065,
                "end": 1171
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 1065,
            "end": 1172
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "asyncKeyword": null,
                "typeParameters": null,
                "arrowPatameterList": {
                    "kind": 342,
                    "parameters": [
                        {
                            "kind": 134299649,
                            "text": "loooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooog",
                            "rawText": "loooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooog",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 1175,
                            "end": 1255
                        }
                    ],
                    "trailingComma": false,
                    "flags": 33,
                    "transformFlags": 0,
                    "start": 1175,
                    "end": 1256
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 1256,
                    "end": 1259
                },
                "contents": {
                    "kind": 210,
                    "newKeyword": {
                        "kind": 138477661,
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 1259,
                        "end": 1263
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "Foo",
                        "rawText": "Foo",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 1263,
                        "end": 1267
                    },
                    "argumentList": {
                        "kind": 256,
                        "elements": [
                            {
                                "kind": 220,
                                "propertyList": {
                                    "kind": 218,
                                    "properties": [
                                        {
                                            "kind": 219,
                                            "asteriskToken": null,
                                            "left": {
                                                "kind": 134299649,
                                                "text": "key",
                                                "rawText": "key",
                                                "flags": 97,
                                                "transformFlags": 0,
                                                "start": 1269,
                                                "end": 1273
                                            },
                                            "right": {
                                                "kind": 134299649,
                                                "text": "value",
                                                "rawText": "value",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 1274,
                                                "end": 1280
                                            },
                                            "flags": 33,
                                            "transformFlags": 128,
                                            "start": 1269,
                                            "end": 1280
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 17,
                                    "transformFlags": 0,
                                    "start": 1269,
                                    "end": 1280
                                },
                                "flags": 49,
                                "transformFlags": 8,
                                "start": 1268,
                                "end": 1281
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 1268,
                        "end": 1281
                    },
                    "flags": 96,
                    "transformFlags": 2048,
                    "start": 1259,
                    "end": 1282
                },
                "flags": 33,
                "transformFlags": 0,
                "start": 1172,
                "end": 1282
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 1172,
            "end": 1283
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 1283,
                    "end": 1286
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 1286,
                    "end": 1288
                },
                "right": {
                    "kind": 271,
                    "asyncKeyword": null,
                    "typeParameters": null,
                    "arrowPatameterList": {
                        "kind": 342,
                        "parameters": [
                            {
                                "kind": 281,
                                "ellipsisToken": null,
                                "left": {
                                    "kind": 134299649,
                                    "text": "greeting",
                                    "rawText": "greeting",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 1290,
                                    "end": 1298
                                },
                                "optionalToken": null,
                                "type": null,
                                "right": {
                                    "kind": 201392131,
                                    "text": "hello",
                                    "rawText": "\"hello\"",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 1300,
                                    "end": 1308
                                },
                                "flags": 32,
                                "transformFlags": 4096,
                                "start": 1288,
                                "end": 1308
                            },
                            {
                                "kind": 281,
                                "ellipsisToken": null,
                                "left": {
                                    "kind": 134299649,
                                    "text": "greeted",
                                    "rawText": "greeted",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 1309,
                                    "end": 1317
                                },
                                "optionalToken": null,
                                "type": null,
                                "right": {
                                    "kind": 201392131,
                                    "text": "\"World\"",
                                    "rawText": "'\"World\"'",
                                    "flags": 4194400,
                                    "transformFlags": 0,
                                    "start": 1319,
                                    "end": 1329
                                },
                                "flags": 32,
                                "transformFlags": 4096,
                                "start": 1288,
                                "end": 1329
                            },
                            {
                                "kind": 281,
                                "ellipsisToken": null,
                                "left": {
                                    "kind": 134299649,
                                    "text": "silent",
                                    "rawText": "silent",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 1330,
                                    "end": 1337
                                },
                                "optionalToken": null,
                                "type": null,
                                "right": {
                                    "kind": 205586437,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 1339,
                                    "end": 1345
                                },
                                "flags": 32,
                                "transformFlags": 4096,
                                "start": 1288,
                                "end": 1345
                            },
                            {
                                "kind": 134299649,
                                "text": "onMouseOver",
                                "rawText": "onMouseOver",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 1346,
                                "end": 1358
                            }
                        ],
                        "trailingComma": false,
                        "flags": 34,
                        "transformFlags": 0,
                        "start": 1290,
                        "end": 1359
                    },
                    "returnType": null,
                    "arrowToken": {
                        "kind": 10,
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 1359,
                        "end": 1362
                    },
                    "contents": {
                        "kind": 131,
                        "expression": {
                            "kind": 134299649,
                            "text": "foo",
                            "rawText": "foo",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 1362,
                            "end": 1366
                        },
                        "argumentList": {
                            "kind": 256,
                            "elements": [
                                {
                                    "kind": 220,
                                    "propertyList": {
                                        "kind": 218,
                                        "properties": [
                                            {
                                                "kind": 219,
                                                "asteriskToken": null,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": "key",
                                                    "rawText": "key",
                                                    "flags": 97,
                                                    "transformFlags": 0,
                                                    "start": 1368,
                                                    "end": 1372
                                                },
                                                "right": {
                                                    "kind": 134299649,
                                                    "text": "value",
                                                    "rawText": "value",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 1373,
                                                    "end": 1379
                                                },
                                                "flags": 33,
                                                "transformFlags": 128,
                                                "start": 1368,
                                                "end": 1379
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 17,
                                        "transformFlags": 0,
                                        "start": 1368,
                                        "end": 1379
                                    },
                                    "flags": 49,
                                    "transformFlags": 8,
                                    "start": 1367,
                                    "end": 1380
                                }
                            ],
                            "trailingComma": false,
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 1367,
                            "end": 1380
                        },
                        "flags": 268435488,
                        "transformFlags": 1,
                        "start": 1362,
                        "end": 1381
                    },
                    "flags": 34,
                    "transformFlags": 0,
                    "start": 1288,
                    "end": 1381
                },
                "flags": 0,
                "transformFlags": 128,
                "start": 1283,
                "end": 1381
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 1283,
            "end": 1382
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 1382,
                    "end": 1385
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 1385,
                    "end": 1387
                },
                "right": {
                    "kind": 271,
                    "asyncKeyword": null,
                    "typeParameters": null,
                    "arrowPatameterList": {
                        "kind": 342,
                        "parameters": [
                            {
                                "kind": 212,
                                "propertyList": {
                                    "kind": 213,
                                    "properties": [
                                        {
                                            "kind": 281,
                                            "ellipsisToken": null,
                                            "left": {
                                                "kind": 134299649,
                                                "text": "greeting",
                                                "rawText": "greeting",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 1390,
                                                "end": 1398
                                            },
                                            "optionalToken": null,
                                            "type": null,
                                            "right": {
                                                "kind": 201392131,
                                                "text": "hello",
                                                "rawText": "\"hello\"",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 1400,
                                                "end": 1408
                                            },
                                            "flags": 32,
                                            "transformFlags": 4096,
                                            "start": 1390,
                                            "end": 1408
                                        },
                                        {
                                            "kind": 281,
                                            "ellipsisToken": null,
                                            "left": {
                                                "kind": 134299649,
                                                "text": "greeted",
                                                "rawText": "greeted",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 1409,
                                                "end": 1417
                                            },
                                            "optionalToken": null,
                                            "type": null,
                                            "right": {
                                                "kind": 201392131,
                                                "text": "\"World\"",
                                                "rawText": "'\"World\"'",
                                                "flags": 4194400,
                                                "transformFlags": 0,
                                                "start": 1419,
                                                "end": 1429
                                            },
                                            "flags": 32,
                                            "transformFlags": 4096,
                                            "start": 1409,
                                            "end": 1429
                                        },
                                        {
                                            "kind": 281,
                                            "ellipsisToken": null,
                                            "left": {
                                                "kind": 134299649,
                                                "text": "silent",
                                                "rawText": "silent",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 1430,
                                                "end": 1437
                                            },
                                            "optionalToken": null,
                                            "type": null,
                                            "right": {
                                                "kind": 205586437,
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 1439,
                                                "end": 1445
                                            },
                                            "flags": 32,
                                            "transformFlags": 4096,
                                            "start": 1430,
                                            "end": 1445
                                        },
                                        {
                                            "kind": 134299649,
                                            "text": "onMouseOver",
                                            "rawText": "onMouseOver",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 1446,
                                            "end": 1458
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 1390,
                                    "end": 1458
                                },
                                "flags": 48,
                                "transformFlags": 0,
                                "start": 1389,
                                "end": 1459
                            }
                        ],
                        "trailingComma": false,
                        "flags": 34,
                        "transformFlags": 0,
                        "start": 1389,
                        "end": 1460
                    },
                    "returnType": null,
                    "arrowToken": {
                        "kind": 10,
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 1460,
                        "end": 1463
                    },
                    "contents": {
                        "kind": 131,
                        "expression": {
                            "kind": 134299649,
                            "text": "foo",
                            "rawText": "foo",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 1463,
                            "end": 1467
                        },
                        "argumentList": {
                            "kind": 256,
                            "elements": [
                                {
                                    "kind": 220,
                                    "propertyList": {
                                        "kind": 218,
                                        "properties": [
                                            {
                                                "kind": 219,
                                                "asteriskToken": null,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": "key",
                                                    "rawText": "key",
                                                    "flags": 97,
                                                    "transformFlags": 0,
                                                    "start": 1469,
                                                    "end": 1473
                                                },
                                                "right": {
                                                    "kind": 134299649,
                                                    "text": "value",
                                                    "rawText": "value",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 1474,
                                                    "end": 1480
                                                },
                                                "flags": 33,
                                                "transformFlags": 128,
                                                "start": 1469,
                                                "end": 1480
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 17,
                                        "transformFlags": 0,
                                        "start": 1469,
                                        "end": 1480
                                    },
                                    "flags": 49,
                                    "transformFlags": 8,
                                    "start": 1468,
                                    "end": 1481
                                }
                            ],
                            "trailingComma": false,
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 1468,
                            "end": 1481
                        },
                        "flags": 268435488,
                        "transformFlags": 1,
                        "start": 1463,
                        "end": 1482
                    },
                    "flags": 34,
                    "transformFlags": 0,
                    "start": 1387,
                    "end": 1482
                },
                "flags": 0,
                "transformFlags": 128,
                "start": 1382,
                "end": 1482
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 1382,
            "end": 1483
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 37757004,
                "flags": 81,
                "transformFlags": 0,
                "start": 1483,
                "end": 1490
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "zoo",
                            "rawText": "zoo",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 1490,
                            "end": 1494
                        },
                        "type": null,
                        "initializer": {
                            "kind": 197,
                            "shortCircuit": {
                                "kind": 134299649,
                                "text": "test",
                                "rawText": "test",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 1496,
                                "end": 1501
                            },
                            "questionToken": {
                                "kind": 134217750,
                                "flags": 65,
                                "transformFlags": 0,
                                "start": 1501,
                                "end": 1505
                            },
                            "consequent": {
                                "kind": 271,
                                "asyncKeyword": null,
                                "typeParameters": null,
                                "arrowPatameterList": {
                                    "kind": 342,
                                    "parameters": [
                                        {
                                            "kind": 281,
                                            "ellipsisToken": null,
                                            "left": {
                                                "kind": 134299649,
                                                "text": "greeting",
                                                "rawText": "greeting",
                                                "flags": 97,
                                                "transformFlags": 0,
                                                "start": 1507,
                                                "end": 1522
                                            },
                                            "optionalToken": null,
                                            "type": null,
                                            "right": {
                                                "kind": 201392131,
                                                "text": "hello",
                                                "rawText": "\"hello\"",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 1524,
                                                "end": 1532
                                            },
                                            "flags": 32,
                                            "transformFlags": 4096,
                                            "start": 1505,
                                            "end": 1532
                                        },
                                        {
                                            "kind": 281,
                                            "ellipsisToken": null,
                                            "left": {
                                                "kind": 134299649,
                                                "text": "greeted",
                                                "rawText": "greeted",
                                                "flags": 97,
                                                "transformFlags": 0,
                                                "start": 1533,
                                                "end": 1547
                                            },
                                            "optionalToken": null,
                                            "type": null,
                                            "right": {
                                                "kind": 201392131,
                                                "text": "\"World\"",
                                                "rawText": "'\"World\"'",
                                                "flags": 4194400,
                                                "transformFlags": 0,
                                                "start": 1549,
                                                "end": 1559
                                            },
                                            "flags": 32,
                                            "transformFlags": 4096,
                                            "start": 1505,
                                            "end": 1559
                                        },
                                        {
                                            "kind": 281,
                                            "ellipsisToken": null,
                                            "left": {
                                                "kind": 134299649,
                                                "text": "silent",
                                                "rawText": "silent",
                                                "flags": 97,
                                                "transformFlags": 0,
                                                "start": 1560,
                                                "end": 1573
                                            },
                                            "optionalToken": null,
                                            "type": null,
                                            "right": {
                                                "kind": 205586437,
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 1575,
                                                "end": 1581
                                            },
                                            "flags": 32,
                                            "transformFlags": 4096,
                                            "start": 1505,
                                            "end": 1581
                                        },
                                        {
                                            "kind": 134299649,
                                            "text": "onMouseOver",
                                            "rawText": "onMouseOver",
                                            "flags": 97,
                                            "transformFlags": 0,
                                            "start": 1582,
                                            "end": 1594
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 34,
                                    "transformFlags": 0,
                                    "start": 1507,
                                    "end": 1596
                                },
                                "returnType": null,
                                "arrowToken": {
                                    "kind": 10,
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 1596,
                                    "end": 1599
                                },
                                "contents": {
                                    "kind": 131,
                                    "expression": {
                                        "kind": 134299649,
                                        "text": "foo",
                                        "rawText": "foo",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 1599,
                                        "end": 1603
                                    },
                                    "argumentList": {
                                        "kind": 256,
                                        "elements": [
                                            {
                                                "kind": 220,
                                                "propertyList": {
                                                    "kind": 218,
                                                    "properties": [
                                                        {
                                                            "kind": 219,
                                                            "asteriskToken": null,
                                                            "left": {
                                                                "kind": 134299649,
                                                                "text": "key",
                                                                "rawText": "key",
                                                                "flags": 97,
                                                                "transformFlags": 0,
                                                                "start": 1605,
                                                                "end": 1615
                                                            },
                                                            "right": {
                                                                "kind": 134299649,
                                                                "text": "value",
                                                                "rawText": "value",
                                                                "flags": 96,
                                                                "transformFlags": 0,
                                                                "start": 1616,
                                                                "end": 1622
                                                            },
                                                            "flags": 33,
                                                            "transformFlags": 128,
                                                            "start": 1605,
                                                            "end": 1622
                                                        }
                                                    ],
                                                    "trailingComma": true,
                                                    "flags": 17,
                                                    "transformFlags": 0,
                                                    "start": 1605,
                                                    "end": 1623
                                                },
                                                "flags": 49,
                                                "transformFlags": 8,
                                                "start": 1604,
                                                "end": 1625
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 1604,
                                        "end": 1625
                                    },
                                    "flags": 268435488,
                                    "transformFlags": 1,
                                    "start": 1599,
                                    "end": 1626
                                },
                                "flags": 34,
                                "transformFlags": 0,
                                "start": 1505,
                                "end": 1626
                            },
                            "colonToken": {
                                "kind": 21,
                                "flags": 65,
                                "transformFlags": 0,
                                "start": 1626,
                                "end": 1630
                            },
                            "alternate": {
                                "kind": 271,
                                "asyncKeyword": null,
                                "typeParameters": null,
                                "arrowPatameterList": {
                                    "kind": 342,
                                    "parameters": [
                                        {
                                            "kind": 281,
                                            "ellipsisToken": null,
                                            "left": {
                                                "kind": 134299649,
                                                "text": "greeting",
                                                "rawText": "greeting",
                                                "flags": 97,
                                                "transformFlags": 0,
                                                "start": 1632,
                                                "end": 1647
                                            },
                                            "optionalToken": null,
                                            "type": null,
                                            "right": {
                                                "kind": 201392131,
                                                "text": "hello",
                                                "rawText": "\"hello\"",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 1649,
                                                "end": 1657
                                            },
                                            "flags": 32,
                                            "transformFlags": 4096,
                                            "start": 1630,
                                            "end": 1657
                                        },
                                        {
                                            "kind": 281,
                                            "ellipsisToken": null,
                                            "left": {
                                                "kind": 134299649,
                                                "text": "greeted",
                                                "rawText": "greeted",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 1658,
                                                "end": 1666
                                            },
                                            "optionalToken": null,
                                            "type": null,
                                            "right": {
                                                "kind": 201392131,
                                                "text": "\"World\"",
                                                "rawText": "'\"World\"'",
                                                "flags": 4194400,
                                                "transformFlags": 0,
                                                "start": 1668,
                                                "end": 1678
                                            },
                                            "flags": 32,
                                            "transformFlags": 4096,
                                            "start": 1630,
                                            "end": 1678
                                        },
                                        {
                                            "kind": 281,
                                            "ellipsisToken": null,
                                            "left": {
                                                "kind": 134299649,
                                                "text": "silent",
                                                "rawText": "silent",
                                                "flags": 97,
                                                "transformFlags": 0,
                                                "start": 1679,
                                                "end": 1692
                                            },
                                            "optionalToken": null,
                                            "type": null,
                                            "right": {
                                                "kind": 205586437,
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 1694,
                                                "end": 1700
                                            },
                                            "flags": 32,
                                            "transformFlags": 4096,
                                            "start": 1630,
                                            "end": 1700
                                        },
                                        {
                                            "kind": 134299649,
                                            "text": "onMouseOver",
                                            "rawText": "onMouseOver",
                                            "flags": 97,
                                            "transformFlags": 0,
                                            "start": 1701,
                                            "end": 1719
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 34,
                                    "transformFlags": 0,
                                    "start": 1632,
                                    "end": 1727
                                },
                                "returnType": null,
                                "arrowToken": {
                                    "kind": 10,
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 1727,
                                    "end": 1730
                                },
                                "contents": {
                                    "kind": 210,
                                    "newKeyword": {
                                        "kind": 138477661,
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 1730,
                                        "end": 1734
                                    },
                                    "expression": {
                                        "kind": 134299649,
                                        "text": "Foo",
                                        "rawText": "Foo",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 1734,
                                        "end": 1738
                                    },
                                    "argumentList": {
                                        "kind": 256,
                                        "elements": [
                                            {
                                                "kind": 220,
                                                "propertyList": {
                                                    "kind": 218,
                                                    "properties": [
                                                        {
                                                            "kind": 219,
                                                            "asteriskToken": null,
                                                            "left": {
                                                                "kind": 134299649,
                                                                "text": "key",
                                                                "rawText": "key",
                                                                "flags": 97,
                                                                "transformFlags": 0,
                                                                "start": 1740,
                                                                "end": 1750
                                                            },
                                                            "right": {
                                                                "kind": 134299649,
                                                                "text": "value",
                                                                "rawText": "value",
                                                                "flags": 96,
                                                                "transformFlags": 0,
                                                                "start": 1751,
                                                                "end": 1757
                                                            },
                                                            "flags": 33,
                                                            "transformFlags": 128,
                                                            "start": 1740,
                                                            "end": 1757
                                                        }
                                                    ],
                                                    "trailingComma": true,
                                                    "flags": 17,
                                                    "transformFlags": 0,
                                                    "start": 1740,
                                                    "end": 1758
                                                },
                                                "flags": 49,
                                                "transformFlags": 8,
                                                "start": 1739,
                                                "end": 1760
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 1739,
                                        "end": 1760
                                    },
                                    "flags": 96,
                                    "transformFlags": 2048,
                                    "start": 1730,
                                    "end": 1761
                                },
                                "flags": 34,
                                "transformFlags": 0,
                                "start": 1630,
                                "end": 1761
                            },
                            "flags": 96,
                            "transformFlags": 4096,
                            "start": 1496,
                            "end": 1761
                        },
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 1490,
                        "end": 1761
                    }
                ],
                "flags": 16777232,
                "transformFlags": 0,
                "start": 1490,
                "end": 1761
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 1483,
            "end": 1762
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 1762,
                    "end": 1765
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 1765,
                    "end": 1767
                },
                "right": {
                    "kind": 198,
                    "left": {
                        "kind": 134299649,
                        "text": "a",
                        "rawText": "a",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 1767,
                        "end": 1769
                    },
                    "operatorToken": {
                        "kind": 33339,
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 1769,
                        "end": 1772
                    },
                    "right": {
                        "kind": 121,
                        "expression": {
                            "kind": 271,
                            "asyncKeyword": null,
                            "typeParameters": null,
                            "arrowPatameterList": {
                                "kind": 342,
                                "parameters": [
                                    {
                                        "kind": 281,
                                        "ellipsisToken": null,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "greeting",
                                            "rawText": "greeting",
                                            "flags": 97,
                                            "transformFlags": 0,
                                            "start": 1775,
                                            "end": 1790
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "right": {
                                            "kind": 201392131,
                                            "text": "hello",
                                            "rawText": "\"hello\"",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 1792,
                                            "end": 1800
                                        },
                                        "flags": 32,
                                        "transformFlags": 4096,
                                        "start": 1774,
                                        "end": 1800
                                    },
                                    {
                                        "kind": 281,
                                        "ellipsisToken": null,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "greeted",
                                            "rawText": "greeted",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 1801,
                                            "end": 1809
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "right": {
                                            "kind": 201392131,
                                            "text": "\"World\"",
                                            "rawText": "'\"World\"'",
                                            "flags": 4194400,
                                            "transformFlags": 0,
                                            "start": 1811,
                                            "end": 1821
                                        },
                                        "flags": 32,
                                        "transformFlags": 4096,
                                        "start": 1774,
                                        "end": 1821
                                    },
                                    {
                                        "kind": 281,
                                        "ellipsisToken": null,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "silent",
                                            "rawText": "silent",
                                            "flags": 97,
                                            "transformFlags": 0,
                                            "start": 1822,
                                            "end": 1835
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "right": {
                                            "kind": 205586437,
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 1837,
                                            "end": 1843
                                        },
                                        "flags": 32,
                                        "transformFlags": 4096,
                                        "start": 1774,
                                        "end": 1843
                                    },
                                    {
                                        "kind": 134299649,
                                        "text": "onMouseOver",
                                        "rawText": "onMouseOver",
                                        "flags": 97,
                                        "transformFlags": 0,
                                        "start": 1844,
                                        "end": 1862
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 34,
                                "transformFlags": 0,
                                "start": 1775,
                                "end": 1870
                            },
                            "returnType": null,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 1870,
                                "end": 1873
                            },
                            "contents": {
                                "kind": 210,
                                "newKeyword": {
                                    "kind": 138477661,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 1873,
                                    "end": 1877
                                },
                                "expression": {
                                    "kind": 134299649,
                                    "text": "Foo",
                                    "rawText": "Foo",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 1877,
                                    "end": 1881
                                },
                                "argumentList": {
                                    "kind": 256,
                                    "elements": [
                                        {
                                            "kind": 220,
                                            "propertyList": {
                                                "kind": 218,
                                                "properties": [
                                                    {
                                                        "kind": 219,
                                                        "asteriskToken": null,
                                                        "left": {
                                                            "kind": 134299649,
                                                            "text": "key",
                                                            "rawText": "key",
                                                            "flags": 97,
                                                            "transformFlags": 0,
                                                            "start": 1883,
                                                            "end": 1893
                                                        },
                                                        "right": {
                                                            "kind": 134299649,
                                                            "text": "value",
                                                            "rawText": "value",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 1894,
                                                            "end": 1900
                                                        },
                                                        "flags": 33,
                                                        "transformFlags": 128,
                                                        "start": 1883,
                                                        "end": 1900
                                                    }
                                                ],
                                                "trailingComma": true,
                                                "flags": 17,
                                                "transformFlags": 0,
                                                "start": 1883,
                                                "end": 1901
                                            },
                                            "flags": 49,
                                            "transformFlags": 8,
                                            "start": 1882,
                                            "end": 1903
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 1882,
                                    "end": 1903
                                },
                                "flags": 96,
                                "transformFlags": 2048,
                                "start": 1873,
                                "end": 1904
                            },
                            "flags": 34,
                            "transformFlags": 0,
                            "start": 1774,
                            "end": 1904
                        },
                        "flags": 1772,
                        "transformFlags": 0,
                        "start": 32,
                        "end": 1905
                    },
                    "flags": 96,
                    "transformFlags": 5120,
                    "start": 1767,
                    "end": 1905
                },
                "flags": 0,
                "transformFlags": 128,
                "start": 1762,
                "end": 1905
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 1762,
            "end": 1906
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "transformFlags": 0,
                "start": 1906,
                "end": 1916
            },
            "asteriskToken": null,
            "name": {
                "kind": 134299649,
                "text": "bar",
                "rawText": "bar",
                "flags": 96,
                "transformFlags": 0,
                "start": 1916,
                "end": 1920
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [
                    {
                        "kind": 281,
                        "ellipsisToken": null,
                        "left": {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 1921,
                            "end": 1922
                        },
                        "optionalToken": null,
                        "type": null,
                        "right": {
                            "kind": 271,
                            "asyncKeyword": null,
                            "typeParameters": null,
                            "arrowPatameterList": {
                                "kind": 342,
                                "parameters": [
                                    {
                                        "kind": 281,
                                        "ellipsisToken": null,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "greeting",
                                            "rawText": "greeting",
                                            "flags": 97,
                                            "transformFlags": 0,
                                            "start": 1926,
                                            "end": 1941
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "right": {
                                            "kind": 201392131,
                                            "text": "hello",
                                            "rawText": "\"hello\"",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 1943,
                                            "end": 1951
                                        },
                                        "flags": 32,
                                        "transformFlags": 4096,
                                        "start": 1924,
                                        "end": 1951
                                    },
                                    {
                                        "kind": 281,
                                        "ellipsisToken": null,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "greeted",
                                            "rawText": "greeted",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 1952,
                                            "end": 1960
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "right": {
                                            "kind": 201392131,
                                            "text": "\"World\"",
                                            "rawText": "'\"World\"'",
                                            "flags": 4194400,
                                            "transformFlags": 0,
                                            "start": 1962,
                                            "end": 1972
                                        },
                                        "flags": 32,
                                        "transformFlags": 4096,
                                        "start": 1924,
                                        "end": 1972
                                    },
                                    {
                                        "kind": 281,
                                        "ellipsisToken": null,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "silent",
                                            "rawText": "silent",
                                            "flags": 97,
                                            "transformFlags": 0,
                                            "start": 1973,
                                            "end": 1986
                                        },
                                        "optionalToken": null,
                                        "type": null,
                                        "right": {
                                            "kind": 205586437,
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 1988,
                                            "end": 1994
                                        },
                                        "flags": 32,
                                        "transformFlags": 4096,
                                        "start": 1924,
                                        "end": 1994
                                    },
                                    {
                                        "kind": 134299649,
                                        "text": "onMouseOver",
                                        "rawText": "onMouseOver",
                                        "flags": 97,
                                        "transformFlags": 0,
                                        "start": 1995,
                                        "end": 2013
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 34,
                                "transformFlags": 0,
                                "start": 1926,
                                "end": 2021
                            },
                            "returnType": null,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 2021,
                                "end": 2024
                            },
                            "contents": {
                                "kind": 210,
                                "newKeyword": {
                                    "kind": 138477661,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 2024,
                                    "end": 2028
                                },
                                "expression": {
                                    "kind": 134299649,
                                    "text": "Foo",
                                    "rawText": "Foo",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 2028,
                                    "end": 2032
                                },
                                "argumentList": {
                                    "kind": 256,
                                    "elements": [
                                        {
                                            "kind": 220,
                                            "propertyList": {
                                                "kind": 218,
                                                "properties": [
                                                    {
                                                        "kind": 219,
                                                        "asteriskToken": null,
                                                        "left": {
                                                            "kind": 134299649,
                                                            "text": "key",
                                                            "rawText": "key",
                                                            "flags": 97,
                                                            "transformFlags": 0,
                                                            "start": 2034,
                                                            "end": 2044
                                                        },
                                                        "right": {
                                                            "kind": 134299649,
                                                            "text": "value",
                                                            "rawText": "value",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 2045,
                                                            "end": 2051
                                                        },
                                                        "flags": 33,
                                                        "transformFlags": 128,
                                                        "start": 2034,
                                                        "end": 2051
                                                    }
                                                ],
                                                "trailingComma": true,
                                                "flags": 17,
                                                "transformFlags": 0,
                                                "start": 2034,
                                                "end": 2052
                                            },
                                            "flags": 49,
                                            "transformFlags": 8,
                                            "start": 2033,
                                            "end": 2054
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 2033,
                                    "end": 2054
                                },
                                "flags": 96,
                                "transformFlags": 2048,
                                "start": 2024,
                                "end": 2055
                            },
                            "flags": 34,
                            "transformFlags": 0,
                            "start": 1924,
                            "end": 2055
                        },
                        "flags": 34,
                        "transformFlags": 4096,
                        "start": 1921,
                        "end": 2055
                    }
                ],
                "trailingComma": false,
                "flags": 34,
                "transformFlags": 0,
                "start": 1921,
                "end": 2055
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 2058,
                    "end": 2058
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 2056,
                "end": 2059
            },
            "returnType": null,
            "flags": 16,
            "transformFlags": 0,
            "start": 1906,
            "end": 2059
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": null,
            "functionKeyword": {
                "kind": 37822554,
                "flags": 65,
                "transformFlags": 0,
                "start": 2059,
                "end": 2069
            },
            "asteriskToken": {
                "kind": 67143222,
                "flags": 64,
                "transformFlags": 32,
                "start": 2069,
                "end": 2070
            },
            "name": {
                "kind": 134299649,
                "text": "bar",
                "rawText": "bar",
                "flags": 96,
                "transformFlags": 0,
                "start": 2070,
                "end": 2074
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "transformFlags": 0,
                "start": 2075,
                "end": 2075
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 229,
                                "yieldKeyword": {
                                    "kind": 8454253,
                                    "flags": 65,
                                    "transformFlags": 0,
                                    "start": 2078,
                                    "end": 2084
                                },
                                "delegate": false,
                                "asteriskToken": null,
                                "expression": {
                                    "kind": 271,
                                    "asyncKeyword": null,
                                    "typeParameters": null,
                                    "arrowPatameterList": {
                                        "kind": 342,
                                        "parameters": [
                                            {
                                                "kind": 281,
                                                "ellipsisToken": null,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": "greeting",
                                                    "rawText": "greeting",
                                                    "flags": 97,
                                                    "transformFlags": 0,
                                                    "start": 2086,
                                                    "end": 2101
                                                },
                                                "optionalToken": null,
                                                "type": null,
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "hello",
                                                    "rawText": "\"hello\"",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 2103,
                                                    "end": 2111
                                                },
                                                "flags": 32,
                                                "transformFlags": 4096,
                                                "start": 2084,
                                                "end": 2111
                                            },
                                            {
                                                "kind": 281,
                                                "ellipsisToken": null,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": "greeted",
                                                    "rawText": "greeted",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 2112,
                                                    "end": 2120
                                                },
                                                "optionalToken": null,
                                                "type": null,
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "\"World\"",
                                                    "rawText": "'\"World\"'",
                                                    "flags": 4194400,
                                                    "transformFlags": 0,
                                                    "start": 2122,
                                                    "end": 2132
                                                },
                                                "flags": 32,
                                                "transformFlags": 4096,
                                                "start": 2084,
                                                "end": 2132
                                            },
                                            {
                                                "kind": 281,
                                                "ellipsisToken": null,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": "silent",
                                                    "rawText": "silent",
                                                    "flags": 97,
                                                    "transformFlags": 0,
                                                    "start": 2133,
                                                    "end": 2146
                                                },
                                                "optionalToken": null,
                                                "type": null,
                                                "right": {
                                                    "kind": 205586437,
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 2148,
                                                    "end": 2154
                                                },
                                                "flags": 32,
                                                "transformFlags": 4096,
                                                "start": 2084,
                                                "end": 2154
                                            },
                                            {
                                                "kind": 134299649,
                                                "text": "onMouseOver",
                                                "rawText": "onMouseOver",
                                                "flags": 97,
                                                "transformFlags": 0,
                                                "start": 2155,
                                                "end": 2173
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 34,
                                        "transformFlags": 0,
                                        "start": 2086,
                                        "end": 2181
                                    },
                                    "returnType": null,
                                    "arrowToken": {
                                        "kind": 10,
                                        "flags": 64,
                                        "transformFlags": 0,
                                        "start": 2181,
                                        "end": 2184
                                    },
                                    "contents": {
                                        "kind": 210,
                                        "newKeyword": {
                                            "kind": 138477661,
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 2184,
                                            "end": 2188
                                        },
                                        "expression": {
                                            "kind": 134299649,
                                            "text": "Foo",
                                            "rawText": "Foo",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 2188,
                                            "end": 2192
                                        },
                                        "argumentList": {
                                            "kind": 256,
                                            "elements": [
                                                {
                                                    "kind": 220,
                                                    "propertyList": {
                                                        "kind": 218,
                                                        "properties": [
                                                            {
                                                                "kind": 219,
                                                                "asteriskToken": null,
                                                                "left": {
                                                                    "kind": 134299649,
                                                                    "text": "key",
                                                                    "rawText": "key",
                                                                    "flags": 97,
                                                                    "transformFlags": 0,
                                                                    "start": 2194,
                                                                    "end": 2204
                                                                },
                                                                "right": {
                                                                    "kind": 134299649,
                                                                    "text": "value",
                                                                    "rawText": "value",
                                                                    "flags": 96,
                                                                    "transformFlags": 0,
                                                                    "start": 2205,
                                                                    "end": 2211
                                                                },
                                                                "flags": 33,
                                                                "transformFlags": 128,
                                                                "start": 2194,
                                                                "end": 2211
                                                            }
                                                        ],
                                                        "trailingComma": true,
                                                        "flags": 17,
                                                        "transformFlags": 0,
                                                        "start": 2194,
                                                        "end": 2212
                                                    },
                                                    "flags": 49,
                                                    "transformFlags": 8,
                                                    "start": 2193,
                                                    "end": 2214
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 2193,
                                            "end": 2214
                                        },
                                        "flags": 96,
                                        "transformFlags": 2048,
                                        "start": 2184,
                                        "end": 2215
                                    },
                                    "flags": 34,
                                    "transformFlags": 0,
                                    "start": 2084,
                                    "end": 2215
                                },
                                "flags": 32,
                                "transformFlags": 4096,
                                "start": 2078,
                                "end": 2215
                            },
                            "flags": 16,
                            "transformFlags": 4096,
                            "start": 2078,
                            "end": 2215
                        }
                    ],
                    "flags": 33,
                    "transformFlags": 0,
                    "start": 2078,
                    "end": 2215
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 2076,
                "end": 2217
            },
            "returnType": null,
            "flags": 272,
            "transformFlags": 0,
            "start": 2059,
            "end": 2217
        },
        {
            "kind": 176,
            "declareKeyword": null,
            "asyncKeyword": {
                "kind": 82031,
                "flags": 65,
                "transformFlags": 0,
                "start": 2217,
                "end": 2224
            },
            "functionKeyword": {
                "kind": 37822554,
                "flags": 64,
                "transformFlags": 0,
                "start": 2224,
                "end": 2233
            },
            "asteriskToken": {
                "kind": 67143222,
                "flags": 64,
                "transformFlags": 32,
                "start": 2233,
                "end": 2234
            },
            "name": {
                "kind": 134299649,
                "text": "bar",
                "rawText": "bar",
                "flags": 96,
                "transformFlags": 0,
                "start": 2234,
                "end": 2238
            },
            "typeParameters": null,
            "formalParameterList": {
                "kind": 214,
                "formalParameters": [],
                "trailingComma": false,
                "flags": 32,
                "transformFlags": 0,
                "start": 2239,
                "end": 2239
            },
            "contents": {
                "kind": 216,
                "functionStatementList": {
                    "kind": 217,
                    "directives": [],
                    "statements": [
                        {
                            "kind": 120,
                            "expression": {
                                "kind": 208,
                                "awaitKeyword": {
                                    "kind": 82196,
                                    "flags": 65,
                                    "transformFlags": 0,
                                    "start": 2242,
                                    "end": 2248
                                },
                                "expression": {
                                    "kind": 121,
                                    "expression": {
                                        "kind": 271,
                                        "asyncKeyword": null,
                                        "typeParameters": null,
                                        "arrowPatameterList": {
                                            "kind": 342,
                                            "parameters": [
                                                {
                                                    "kind": 281,
                                                    "ellipsisToken": null,
                                                    "left": {
                                                        "kind": 134299649,
                                                        "text": "greeting",
                                                        "rawText": "greeting",
                                                        "flags": 97,
                                                        "transformFlags": 0,
                                                        "start": 2251,
                                                        "end": 2266
                                                    },
                                                    "optionalToken": null,
                                                    "type": null,
                                                    "right": {
                                                        "kind": 201392131,
                                                        "text": "hello",
                                                        "rawText": "\"hello\"",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 2268,
                                                        "end": 2276
                                                    },
                                                    "flags": 32,
                                                    "transformFlags": 4096,
                                                    "start": 2250,
                                                    "end": 2276
                                                },
                                                {
                                                    "kind": 281,
                                                    "ellipsisToken": null,
                                                    "left": {
                                                        "kind": 134299649,
                                                        "text": "greeted",
                                                        "rawText": "greeted",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 2277,
                                                        "end": 2285
                                                    },
                                                    "optionalToken": null,
                                                    "type": null,
                                                    "right": {
                                                        "kind": 201392131,
                                                        "text": "\"World\"",
                                                        "rawText": "'\"World\"'",
                                                        "flags": 4194400,
                                                        "transformFlags": 0,
                                                        "start": 2287,
                                                        "end": 2297
                                                    },
                                                    "flags": 32,
                                                    "transformFlags": 4096,
                                                    "start": 2250,
                                                    "end": 2297
                                                },
                                                {
                                                    "kind": 281,
                                                    "ellipsisToken": null,
                                                    "left": {
                                                        "kind": 134299649,
                                                        "text": "silent",
                                                        "rawText": "silent",
                                                        "flags": 97,
                                                        "transformFlags": 0,
                                                        "start": 2298,
                                                        "end": 2311
                                                    },
                                                    "optionalToken": null,
                                                    "type": null,
                                                    "right": {
                                                        "kind": 205586437,
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 2313,
                                                        "end": 2319
                                                    },
                                                    "flags": 32,
                                                    "transformFlags": 4096,
                                                    "start": 2250,
                                                    "end": 2319
                                                },
                                                {
                                                    "kind": 134299649,
                                                    "text": "onMouseOver",
                                                    "rawText": "onMouseOver",
                                                    "flags": 97,
                                                    "transformFlags": 0,
                                                    "start": 2320,
                                                    "end": 2338
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 34,
                                            "transformFlags": 0,
                                            "start": 2251,
                                            "end": 2346
                                        },
                                        "returnType": null,
                                        "arrowToken": {
                                            "kind": 10,
                                            "flags": 64,
                                            "transformFlags": 0,
                                            "start": 2346,
                                            "end": 2349
                                        },
                                        "contents": {
                                            "kind": 210,
                                            "newKeyword": {
                                                "kind": 138477661,
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 2349,
                                                "end": 2353
                                            },
                                            "expression": {
                                                "kind": 134299649,
                                                "text": "Foo",
                                                "rawText": "Foo",
                                                "flags": 96,
                                                "transformFlags": 0,
                                                "start": 2353,
                                                "end": 2357
                                            },
                                            "argumentList": {
                                                "kind": 256,
                                                "elements": [
                                                    {
                                                        "kind": 220,
                                                        "propertyList": {
                                                            "kind": 218,
                                                            "properties": [
                                                                {
                                                                    "kind": 219,
                                                                    "asteriskToken": null,
                                                                    "left": {
                                                                        "kind": 134299649,
                                                                        "text": "key",
                                                                        "rawText": "key",
                                                                        "flags": 97,
                                                                        "transformFlags": 0,
                                                                        "start": 2359,
                                                                        "end": 2369
                                                                    },
                                                                    "right": {
                                                                        "kind": 134299649,
                                                                        "text": "value",
                                                                        "rawText": "value",
                                                                        "flags": 96,
                                                                        "transformFlags": 0,
                                                                        "start": 2370,
                                                                        "end": 2376
                                                                    },
                                                                    "flags": 33,
                                                                    "transformFlags": 128,
                                                                    "start": 2359,
                                                                    "end": 2376
                                                                }
                                                            ],
                                                            "trailingComma": true,
                                                            "flags": 17,
                                                            "transformFlags": 0,
                                                            "start": 2359,
                                                            "end": 2377
                                                        },
                                                        "flags": 49,
                                                        "transformFlags": 8,
                                                        "start": 2358,
                                                        "end": 2379
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 32,
                                                "transformFlags": 0,
                                                "start": 2358,
                                                "end": 2379
                                            },
                                            "flags": 96,
                                            "transformFlags": 2048,
                                            "start": 2349,
                                            "end": 2380
                                        },
                                        "flags": 34,
                                        "transformFlags": 0,
                                        "start": 2250,
                                        "end": 2380
                                    },
                                    "flags": 2248,
                                    "transformFlags": 0,
                                    "start": 32,
                                    "end": 2381
                                },
                                "flags": 32,
                                "transformFlags": 4096,
                                "start": 2242,
                                "end": 2381
                            },
                            "flags": 16,
                            "transformFlags": 4096,
                            "start": 2242,
                            "end": 2381
                        }
                    ],
                    "flags": 33,
                    "transformFlags": 0,
                    "start": 2242,
                    "end": 2381
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 2240,
                "end": 2383
            },
            "returnType": null,
            "flags": 400,
            "transformFlags": 0,
            "start": 2217,
            "end": 2383
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "expect",
                    "rawText": "expect",
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 2383,
                    "end": 2400
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 271,
                            "asyncKeyword": null,
                            "typeParameters": null,
                            "arrowPatameterList": {
                                "kind": 342,
                                "parameters": [],
                                "trailingComma": false,
                                "flags": 33,
                                "transformFlags": 0,
                                "start": 2405,
                                "end": 2405
                            },
                            "returnType": null,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 2406,
                                "end": 2409
                            },
                            "contents": {
                                "kind": 210,
                                "newKeyword": {
                                    "kind": 138477661,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 2409,
                                    "end": 2413
                                },
                                "expression": {
                                    "kind": 134299649,
                                    "text": "GraphQLObjectType",
                                    "rawText": "GraphQLObjectType",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 2413,
                                    "end": 2431
                                },
                                "argumentList": {
                                    "kind": 256,
                                    "elements": [
                                        {
                                            "kind": 220,
                                            "propertyList": {
                                                "kind": 218,
                                                "properties": [
                                                    {
                                                        "kind": 219,
                                                        "asteriskToken": null,
                                                        "left": {
                                                            "kind": 134299649,
                                                            "text": "field1",
                                                            "rawText": "field1",
                                                            "flags": 97,
                                                            "transformFlags": 0,
                                                            "start": 2433,
                                                            "end": 2446
                                                        },
                                                        "right": {
                                                            "kind": 201392131,
                                                            "text": "foo",
                                                            "rawText": "'foo'",
                                                            "flags": 4194400,
                                                            "transformFlags": 0,
                                                            "start": 2447,
                                                            "end": 2453
                                                        },
                                                        "flags": 33,
                                                        "transformFlags": 128,
                                                        "start": 2433,
                                                        "end": 2453
                                                    },
                                                    {
                                                        "kind": 219,
                                                        "asteriskToken": null,
                                                        "left": {
                                                            "kind": 134299649,
                                                            "text": "field2",
                                                            "rawText": "field2",
                                                            "flags": 97,
                                                            "transformFlags": 0,
                                                            "start": 2454,
                                                            "end": 2467
                                                        },
                                                        "right": {
                                                            "kind": 201392131,
                                                            "text": "bar",
                                                            "rawText": "'bar'",
                                                            "flags": 4194400,
                                                            "transformFlags": 0,
                                                            "start": 2468,
                                                            "end": 2474
                                                        },
                                                        "flags": 33,
                                                        "transformFlags": 128,
                                                        "start": 2454,
                                                        "end": 2474
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 17,
                                                "transformFlags": 0,
                                                "start": 2433,
                                                "end": 2474
                                            },
                                            "flags": 49,
                                            "transformFlags": 8,
                                            "start": 2432,
                                            "end": 2478
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 2432,
                                    "end": 2478
                                },
                                "flags": 96,
                                "transformFlags": 2048,
                                "start": 2409,
                                "end": 2479
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 2401,
                            "end": 2479
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 2401,
                    "end": 2479
                },
                "flags": 268435488,
                "transformFlags": 1,
                "start": 2383,
                "end": 2481
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 2383,
            "end": 2482
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "asyncKeyword": null,
                "typeParameters": null,
                "arrowPatameterList": {
                    "kind": 342,
                    "parameters": [],
                    "trailingComma": false,
                    "flags": 33,
                    "transformFlags": 0,
                    "start": 2484,
                    "end": 2484
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 2485,
                    "end": 2488
                },
                "contents": {
                    "kind": 210,
                    "newKeyword": {
                        "kind": 138477661,
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 2488,
                        "end": 2492
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "GraphQLObjectType",
                        "rawText": "GraphQLObjectType",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 2492,
                        "end": 2510
                    },
                    "argumentList": {
                        "kind": 256,
                        "elements": [
                            {
                                "kind": 220,
                                "propertyList": {
                                    "kind": 218,
                                    "properties": [
                                        {
                                            "kind": 219,
                                            "asteriskToken": null,
                                            "left": {
                                                "kind": 134299649,
                                                "text": "field1",
                                                "rawText": "field1",
                                                "flags": 97,
                                                "transformFlags": 0,
                                                "start": 2512,
                                                "end": 2521
                                            },
                                            "right": {
                                                "kind": 201392131,
                                                "text": "foo",
                                                "rawText": "'foo'",
                                                "flags": 4194400,
                                                "transformFlags": 0,
                                                "start": 2522,
                                                "end": 2528
                                            },
                                            "flags": 33,
                                            "transformFlags": 128,
                                            "start": 2512,
                                            "end": 2528
                                        },
                                        {
                                            "kind": 219,
                                            "asteriskToken": null,
                                            "left": {
                                                "kind": 134299649,
                                                "text": "field2",
                                                "rawText": "field2",
                                                "flags": 97,
                                                "transformFlags": 0,
                                                "start": 2529,
                                                "end": 2538
                                            },
                                            "right": {
                                                "kind": 201392131,
                                                "text": "bar",
                                                "rawText": "'bar'",
                                                "flags": 4194400,
                                                "transformFlags": 0,
                                                "start": 2539,
                                                "end": 2545
                                            },
                                            "flags": 33,
                                            "transformFlags": 128,
                                            "start": 2529,
                                            "end": 2545
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 17,
                                    "transformFlags": 0,
                                    "start": 2512,
                                    "end": 2545
                                },
                                "flags": 49,
                                "transformFlags": 8,
                                "start": 2511,
                                "end": 2547
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 2511,
                        "end": 2547
                    },
                    "flags": 96,
                    "transformFlags": 2048,
                    "start": 2488,
                    "end": 2548
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 2482,
                "end": 2548
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 2482,
            "end": 2549
        },
        {
            "kind": 120,
            "expression": {
                "kind": 210,
                "newKeyword": {
                    "kind": 138477661,
                    "flags": 97,
                    "transformFlags": 0,
                    "start": 2549,
                    "end": 2553
                },
                "expression": {
                    "kind": 134299649,
                    "text": "Foo",
                    "rawText": "Foo",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 2553,
                    "end": 2557
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 271,
                            "asyncKeyword": null,
                            "typeParameters": null,
                            "arrowPatameterList": {
                                "kind": 342,
                                "parameters": [],
                                "trailingComma": false,
                                "flags": 33,
                                "transformFlags": 0,
                                "start": 2562,
                                "end": 2562
                            },
                            "returnType": null,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 2563,
                                "end": 2566
                            },
                            "contents": {
                                "kind": 210,
                                "newKeyword": {
                                    "kind": 138477661,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 2566,
                                    "end": 2570
                                },
                                "expression": {
                                    "kind": 134299649,
                                    "text": "FooBar",
                                    "rawText": "FooBar",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 2570,
                                    "end": 2577
                                },
                                "argumentList": {
                                    "kind": 256,
                                    "elements": [
                                        {
                                            "kind": 220,
                                            "propertyList": {
                                                "kind": 218,
                                                "properties": [
                                                    {
                                                        "kind": 219,
                                                        "asteriskToken": null,
                                                        "left": {
                                                            "kind": 134299649,
                                                            "text": "field1",
                                                            "rawText": "field1",
                                                            "flags": 97,
                                                            "transformFlags": 0,
                                                            "start": 2579,
                                                            "end": 2590
                                                        },
                                                        "right": {
                                                            "kind": 201392130,
                                                            "text": 1,
                                                            "rawText": "1",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 2591,
                                                            "end": 2593
                                                        },
                                                        "flags": 33,
                                                        "transformFlags": 128,
                                                        "start": 2579,
                                                        "end": 2593
                                                    },
                                                    {
                                                        "kind": 219,
                                                        "asteriskToken": null,
                                                        "left": {
                                                            "kind": 134299649,
                                                            "text": "field2",
                                                            "rawText": "field2",
                                                            "flags": 97,
                                                            "transformFlags": 0,
                                                            "start": 2594,
                                                            "end": 2605
                                                        },
                                                        "right": {
                                                            "kind": 201392130,
                                                            "text": 2,
                                                            "rawText": "2",
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 2606,
                                                            "end": 2608
                                                        },
                                                        "flags": 33,
                                                        "transformFlags": 128,
                                                        "start": 2594,
                                                        "end": 2608
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 17,
                                                "transformFlags": 0,
                                                "start": 2579,
                                                "end": 2608
                                            },
                                            "flags": 49,
                                            "transformFlags": 8,
                                            "start": 2578,
                                            "end": 2612
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 2578,
                                    "end": 2612
                                },
                                "flags": 96,
                                "transformFlags": 2048,
                                "start": 2566,
                                "end": 2613
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 2558,
                            "end": 2613
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 2558,
                    "end": 2613
                },
                "flags": 97,
                "transformFlags": 2048,
                "start": 2549,
                "end": 2615
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 2549,
            "end": 2616
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "asyncKeyword": null,
                "typeParameters": null,
                "arrowPatameterList": {
                    "kind": 342,
                    "parameters": [],
                    "trailingComma": false,
                    "flags": 33,
                    "transformFlags": 0,
                    "start": 2618,
                    "end": 2618
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 2619,
                    "end": 2622
                },
                "contents": {
                    "kind": 131,
                    "expression": {
                        "kind": 134299649,
                        "text": "foo",
                        "rawText": "foo",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 2622,
                        "end": 2627
                    },
                    "argumentList": {
                        "kind": 256,
                        "elements": [
                            {
                                "kind": 220,
                                "propertyList": {
                                    "kind": 218,
                                    "properties": [
                                        {
                                            "kind": 134299649,
                                            "text": "bar",
                                            "rawText": "bar",
                                            "flags": 97,
                                            "transformFlags": 0,
                                            "start": 2629,
                                            "end": 2635
                                        }
                                    ],
                                    "trailingComma": true,
                                    "flags": 17,
                                    "transformFlags": 0,
                                    "start": 2629,
                                    "end": 2636
                                },
                                "flags": 49,
                                "transformFlags": 8,
                                "start": 2628,
                                "end": 2638
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 2628,
                        "end": 2638
                    },
                    "flags": 268435488,
                    "transformFlags": 1,
                    "start": 2622,
                    "end": 2639
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 2616,
                "end": 2639
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 2616,
            "end": 2640
        }
    ],
    "isModule": false,
    "source": "() => foo({\nkey: value});\n\n() => foo?.bar({\nkey: value});\n\n() => new Foo({\nkey: value});\n\nconst a31 = () => new Foo({\nkey: value});\n\ncall(() => foo({\nkey: value}));\n\ncall(() => new Foo({\nkey: value}));\n\ncall(() => foo({\nkey: value}), second);\n\n\n[() => new Foo({\nkey: value}), second];\n\na = {b: () => foo({\nkey: value})};\n\na = {b: () => new Foo({\nkey: value})};\n\na = () => foo({\nkey: value});\n\na = () => new Foo({\nkey: value});\n\nfunction a() {return () => foo({\nkey: value});}\nfunction a() {return () => new Foo({\nkey: value});}\n\nconst {a11 = () => foo({\nkey: value})} = {}\n\nconst {a12 = () => new Foo({\nkey: value})} = {}\n\nloooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooog = () => foo({\nkey: value});\n\nloooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooog = () => new Foo({\nkey: value});\n\na = () => loooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooog({\nkey: value});\n\na = () => new loooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooog({\nkey: value});\n\n(loooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooog) => foo({\nkey: value});\n\n(loooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooog) => new Foo({\nkey: value});\n\na = (greeting = \"hello\", greeted = '\"World\"', silent = false, onMouseOver) => foo({\nkey: value});\n\na = ({greeting = \"hello\", greeted = '\"World\"', silent = false, onMouseOver}) => foo({\nkey: value});\n\nconst zoo = test\n  ? (\n      greeting = \"hello\",\n      greeted = '\"World\"',\n      silent = false,\nonMouseOver\n) => foo({\n      key: value,\n})\n  : (\n      greeting = \"hello\", greeted = '\"World\"',\n      silent = false,\n      onMouseOver\n      ) => new Foo({\n      key: value,\n});\n\na = a || ((\n      greeting = \"hello\", greeted = '\"World\"',\n      silent = false,\n      onMouseOver\n      ) => new Foo({\n      key: value,\n}));\n\nfunction bar(a = (\n      greeting = \"hello\", greeted = '\"World\"',\n      silent = false,\n      onMouseOver\n      ) => new Foo({\n      key: value,\n})) {}\n\nfunction* bar() {\nyield (\n      greeting = \"hello\", greeted = '\"World\"',\n      silent = false,\n      onMouseOver\n      ) => new Foo({\n      key: value,\n})\n}\n\nasync function* bar() {\nawait ((\n      greeting = \"hello\", greeted = '\"World\"',\n      silent = false,\n      onMouseOver\n      ) => new Foo({\n      key: value,\n}))\n}\n\n// #5733\nexpect(\n  () => new GraphQLObjectType({\n      field1: 'foo',\n      field2: 'bar'\n  })\n);\n() => new GraphQLObjectType({\n  field1: 'foo',\n  field2: 'bar'\n});\nnew Foo(\n  () => new FooBar({\n    field1: 1,\n    field2: 2\n  })\n);\n() =>  foo({\n  bar,\n});",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 2640
}
```

### Printed

```javascript
() => foo({
    key: value
  });
() => foo?.bar({
    key: value
  });

() => new Foo({
    key: value
  });

const a31 = () => new Foo({
    key: value
  });

call(() => foo({
    key: value
  }));

call(() => new Foo({
    key: value
  }));

call(() => foo({
      key: value
    }), second);

[() => new Foo({
    key: value
  }), second];

a = { b: () => foo({
      key: value
    }) };

a = {
  b: () => new Foo({
      key: value
    })
};

a = () => foo({
    key: value
  });

a = () => new Foo({
    key: value
  });

function a() {
  return () => foo({
      key: value
    });
}

function a() {
  return () =>
    new Foo({
      key: value
    });
}

const {
    a11 = () => foo({
      key: value
    })
  } = {};

const {
    a12 = () => new Foo({
      key: value
    })
  } = {};

loooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooog = () =>
  foo({
    key: value
  });

loooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooog = () =>
  new Foo({
    key: value
  });

a = () =>
  loooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooog({
    key: value
  });

a = () =>
  new loooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooog({
    key: value
  });

(loooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooog) =>
  foo({
    key: value
  });

(loooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooog) =>
  new Foo({
    key: value
  });

a = (greeting = "\"hello\"",
greeted = "'\"World\"'",
silent = false,
onMouseOver) =>
  foo({
    key: value
  });

a = ({
  greeting = "\"hello\"",
  greeted = "'\"World\"'",
  silent = false,
  onMouseOver
}) => foo({
    key: value
  });

const zoo = test
    ? (greeting = "\"hello\"",
      greeted = "'\"World\"'",
      silent = false,
      onMouseOver) => foo({
        key: value,
      })
    : (greeting = "\"hello\"",
      greeted = "'\"World\"'",
      silent = false,
      onMouseOver) => new Foo({
        key: value,
      });

a =
  a ||
  (
    (greeting = "\"hello\"",
    greeted = "'\"World\"'",
    silent = false,
    onMouseOver) =>
      new Foo({
        key: value,
      })
  )
;

function bar(a = (greeting = "\"hello\"",
greeted = "'\"World\"'",
silent = false,
onMouseOver) =>
  new Foo({
    key: value,
  })) {}

function *bar() {
  yield (greeting = "\"hello\"",
  greeted = "'\"World\"'",
  silent = false,
  onMouseOver) => new Foo({
    key: value,
  });
}

async function *bar() {
  await (
    (greeting = "\"hello\"",
    greeted = "'\"World\"'",
    silent = false,
    onMouseOver) =>
      new Foo({
        key: value,
      })
  );
}


// #5733
expect(() =>
  new GraphQLObjectType({
    field1:
      "'foo'",
    field2: "'bar'"
  }));

() =>
  new GraphQLObjectType({
    field1:
      "'foo'",
    field2: "'bar'"
  });

new Foo(() =>
  new FooBar({
    field1: 1,
    field2: 2
  }));

() => foo({
    bar,
  });

```

### Diagnostics

```javascript
✔ No errors
```

