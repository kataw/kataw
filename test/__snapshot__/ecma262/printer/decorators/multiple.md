# Kataw parser test case

## Input

`````js
const dog = {
  @readonly
  @nonenumerable
  @doubledValue
  legs: 4,

  @readonly
  @nonenumerable
  @doubledValue
  eyes: 2
};

const foo = {
  @multipleDecorators @inline @theyWontAllFitInOneline aVeryLongPropName: "A very long string as value"
};

`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 37757004,
                "flags": 80,
                "transformFlags": 0,
                "start": 0,
                "end": 5
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "dog",
                            "rawText": "dog",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 5,
                            "end": 9
                        },
                        "type": null,
                        "initializer": {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [],
                                "trailingComma": false,
                                "flags": 17,
                                "transformFlags": 0,
                                "start": 13,
                                "end": 13
                            },
                            "flags": 49,
                            "transformFlags": 8,
                            "start": 11,
                            "end": 13
                        },
                        "flags": 16,
                        "transformFlags": 128,
                        "start": 5,
                        "end": 13
                    }
                ],
                "flags": 16777232,
                "transformFlags": 0,
                "start": 5,
                "end": 13
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 0,
            "end": 13
        },
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": {
                "kind": 207,
                "elements": [
                    {
                        "kind": 34611453,
                        "decoratorToken": {
                            "kind": 34611453,
                            "flags": 65,
                            "transformFlags": 0,
                            "start": 13,
                            "end": 17
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "readonly",
                            "rawText": "readonly",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 17,
                            "end": 25
                        },
                        "flags": 0,
                        "transformFlags": 0,
                        "start": 17,
                        "end": 25
                    },
                    {
                        "kind": 34611453,
                        "decoratorToken": {
                            "kind": 34611453,
                            "flags": 65,
                            "transformFlags": 0,
                            "start": 25,
                            "end": 29
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "nonenumerable",
                            "rawText": "nonenumerable",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 29,
                            "end": 42
                        },
                        "flags": 0,
                        "transformFlags": 0,
                        "start": 29,
                        "end": 42
                    },
                    {
                        "kind": 34611453,
                        "decoratorToken": {
                            "kind": 34611453,
                            "flags": 65,
                            "transformFlags": 0,
                            "start": 42,
                            "end": 46
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "doubledValue",
                            "rawText": "doubledValue",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 46,
                            "end": 58
                        },
                        "flags": 0,
                        "transformFlags": 0,
                        "start": 46,
                        "end": 58
                    }
                ],
                "flags": 32,
                "transformFlags": 0,
                "start": 13,
                "end": 58
            },
            "classKeyword": null,
            "name": {
                "kind": 134299649,
                "text": "legs",
                "rawText": "legs",
                "flags": 96,
                "transformFlags": 0,
                "start": 58,
                "end": 65
            },
            "typeParameters": null,
            "tail": {
                "kind": 277,
                "classHeritage": null,
                "body": {
                    "kind": 303,
                    "elements": [],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 65,
                    "end": 65
                },
                "flags": 65,
                "transformFlags": 0,
                "start": 32,
                "end": 65
            },
            "flags": 17,
            "transformFlags": 0,
            "start": 13,
            "end": 65
        },
        {
            "kind": 120,
            "expression": {
                "kind": 132,
                "expressions": [
                    {
                        "kind": 201392130,
                        "text": 4,
                        "rawText": "4",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 66,
                        "end": 68
                    },
                    {
                        "kind": 189,
                        "decorators": {
                            "kind": 207,
                            "elements": [
                                {
                                    "kind": 34611453,
                                    "decoratorToken": {
                                        "kind": 34611453,
                                        "flags": 65,
                                        "transformFlags": 0,
                                        "start": 69,
                                        "end": 74
                                    },
                                    "expression": {
                                        "kind": 134299649,
                                        "text": "readonly",
                                        "rawText": "readonly",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 74,
                                        "end": 82
                                    },
                                    "flags": 0,
                                    "transformFlags": 0,
                                    "start": 74,
                                    "end": 82
                                },
                                {
                                    "kind": 34611453,
                                    "decoratorToken": {
                                        "kind": 34611453,
                                        "flags": 65,
                                        "transformFlags": 0,
                                        "start": 82,
                                        "end": 86
                                    },
                                    "expression": {
                                        "kind": 134299649,
                                        "text": "nonenumerable",
                                        "rawText": "nonenumerable",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 86,
                                        "end": 99
                                    },
                                    "flags": 0,
                                    "transformFlags": 0,
                                    "start": 86,
                                    "end": 99
                                },
                                {
                                    "kind": 34611453,
                                    "decoratorToken": {
                                        "kind": 34611453,
                                        "flags": 65,
                                        "transformFlags": 0,
                                        "start": 99,
                                        "end": 103
                                    },
                                    "expression": {
                                        "kind": 134299649,
                                        "text": "doubledValue",
                                        "rawText": "doubledValue",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 103,
                                        "end": 115
                                    },
                                    "flags": 0,
                                    "transformFlags": 0,
                                    "start": 103,
                                    "end": 115
                                }
                            ],
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 69,
                            "end": 115
                        },
                        "classKeyword": null,
                        "name": {
                            "kind": 134299649,
                            "text": "eyes",
                            "rawText": "eyes",
                            "flags": 97,
                            "transformFlags": 0,
                            "start": 115,
                            "end": 122
                        },
                        "typeParameters": null,
                        "tail": {
                            "kind": 277,
                            "classHeritage": null,
                            "body": {
                                "kind": 303,
                                "elements": [],
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 122,
                                "end": 122
                            },
                            "flags": 122,
                            "transformFlags": 0,
                            "start": 32,
                            "end": 122
                        },
                        "flags": 33,
                        "transformFlags": 0,
                        "start": 69,
                        "end": 122
                    }
                ],
                "flags": 32,
                "transformFlags": 1024,
                "start": 66,
                "end": 122
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 66,
            "end": 122
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 2,
                "rawText": "2",
                "flags": 96,
                "transformFlags": 0,
                "start": 123,
                "end": 125
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 123,
            "end": 125
        },
        {
            "kind": 168,
            "flags": 16,
            "transformFlags": 0,
            "start": 127,
            "end": 128
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 37757004,
                "flags": 81,
                "transformFlags": 0,
                "start": 128,
                "end": 135
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "foo",
                            "rawText": "foo",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 135,
                            "end": 139
                        },
                        "type": null,
                        "initializer": {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [],
                                "trailingComma": false,
                                "flags": 17,
                                "transformFlags": 0,
                                "start": 143,
                                "end": 143
                            },
                            "flags": 49,
                            "transformFlags": 8,
                            "start": 141,
                            "end": 143
                        },
                        "flags": 16,
                        "transformFlags": 128,
                        "start": 135,
                        "end": 143
                    }
                ],
                "flags": 16777232,
                "transformFlags": 0,
                "start": 135,
                "end": 143
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 128,
            "end": 143
        },
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": {
                "kind": 207,
                "elements": [
                    {
                        "kind": 34611453,
                        "decoratorToken": {
                            "kind": 34611453,
                            "flags": 65,
                            "transformFlags": 0,
                            "start": 143,
                            "end": 147
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "multipleDecorators",
                            "rawText": "multipleDecorators",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 147,
                            "end": 165
                        },
                        "flags": 0,
                        "transformFlags": 0,
                        "start": 147,
                        "end": 165
                    },
                    {
                        "kind": 34611453,
                        "decoratorToken": {
                            "kind": 34611453,
                            "flags": 64,
                            "transformFlags": 0,
                            "start": 165,
                            "end": 167
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "inline",
                            "rawText": "inline",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 167,
                            "end": 173
                        },
                        "flags": 0,
                        "transformFlags": 0,
                        "start": 167,
                        "end": 173
                    },
                    {
                        "kind": 34611453,
                        "decoratorToken": {
                            "kind": 34611453,
                            "flags": 64,
                            "transformFlags": 0,
                            "start": 173,
                            "end": 175
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "theyWontAllFitInOneline",
                            "rawText": "theyWontAllFitInOneline",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 175,
                            "end": 198
                        },
                        "flags": 0,
                        "transformFlags": 0,
                        "start": 175,
                        "end": 198
                    }
                ],
                "flags": 32,
                "transformFlags": 0,
                "start": 143,
                "end": 198
            },
            "classKeyword": null,
            "name": {
                "kind": 134299649,
                "text": "aVeryLongPropName",
                "rawText": "aVeryLongPropName",
                "flags": 96,
                "transformFlags": 0,
                "start": 198,
                "end": 216
            },
            "typeParameters": null,
            "tail": {
                "kind": 277,
                "classHeritage": null,
                "body": {
                    "kind": 303,
                    "elements": [],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 216,
                    "end": 216
                },
                "flags": 216,
                "transformFlags": 0,
                "start": 32,
                "end": 216
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 143,
            "end": 216
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392131,
                "text": "A very long string as value",
                "rawText": "\"A very long string as value\"",
                "flags": 96,
                "transformFlags": 0,
                "start": 217,
                "end": 247
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 217,
            "end": 247
        },
        {
            "kind": 168,
            "flags": 16,
            "transformFlags": 0,
            "start": 249,
            "end": 250
        }
    ],
    "isModule": false,
    "source": "const dog = {\n  @readonly\n  @nonenumerable\n  @doubledValue\n  legs: 4,\n\n  @readonly\n  @nonenumerable\n  @doubledValue\n  eyes: 2\n};\n\nconst foo = {\n  @multipleDecorators @inline @theyWontAllFitInOneline aVeryLongPropName: \"A very long string as value\"\n};\n",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 251
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ The parser expected to find a '}' to match the '{' token here - start: 16, end: 17
✖ Missing an opening brace - '{ - start: 65, end: 66
✖ Missing an opening brace - '{ - start: 122, end: 123
✖ Declaration or statement expected - start: 125, end: 127
✖ The parser expected to find a '}' to match the '{' token here - start: 146, end: 147
✖ Missing an opening brace - '{ - start: 216, end: 217
✖ Declaration or statement expected - start: 247, end: 249

```

