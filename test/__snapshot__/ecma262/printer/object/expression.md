# Kataw parser test case

### Printer Options

`````js
{ printWidth: 80 }
`````

### Options

`````js
{ module: true, allowTypes: true }
`````

## Input

`````js

const x = {
  someKey:
    (shortName, shortName)
};

const y = {
  someKey:
    (longLongLongLongLongLongLongLongLongLongLongLongLongLongName, shortName)
};

const z = {
  someKey:
    (longLongLongLongLongLongLongLongLongLongLongLongLongLongName, longLongLongLongLongLongLongLongLongLongLongLongLongLongName, longLongLongLongLongLongLongLongLongLongLongLongLongLongName)
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
                "flags": 81,
                "transformFlags": 0,
                "start": 0,
                "end": 6
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 6,
                            "end": 8
                        },
                        "type": null,
                        "initializer": {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [
                                    {
                                        "kind": 219,
                                        "asteriskToken": null,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "someKey",
                                            "rawText": "someKey",
                                            "flags": 97,
                                            "transformFlags": 0,
                                            "start": 12,
                                            "end": 22
                                        },
                                        "right": {
                                            "kind": 121,
                                            "expression": {
                                                "kind": 132,
                                                "expressions": [
                                                    {
                                                        "kind": 134299649,
                                                        "text": "shortName",
                                                        "rawText": "shortName",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 29,
                                                        "end": 38
                                                    },
                                                    {
                                                        "kind": 134299649,
                                                        "text": "shortName",
                                                        "rawText": "shortName",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 39,
                                                        "end": 49
                                                    }
                                                ],
                                                "flags": 32,
                                                "transformFlags": 1024,
                                                "start": 23,
                                                "end": 50
                                            },
                                            "flags": 33,
                                            "transformFlags": 0,
                                            "start": 23,
                                            "end": 50
                                        },
                                        "flags": 32,
                                        "transformFlags": 128,
                                        "start": 12,
                                        "end": 50
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 17,
                                "transformFlags": 0,
                                "start": 12,
                                "end": 50
                            },
                            "flags": 49,
                            "transformFlags": 8,
                            "start": 10,
                            "end": 52
                        },
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 6,
                        "end": 52
                    }
                ],
                "flags": 16777232,
                "transformFlags": 0,
                "start": 6,
                "end": 52
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 0,
            "end": 53
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 37757004,
                "flags": 81,
                "transformFlags": 0,
                "start": 53,
                "end": 60
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "y",
                            "rawText": "y",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 60,
                            "end": 62
                        },
                        "type": null,
                        "initializer": {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [
                                    {
                                        "kind": 219,
                                        "asteriskToken": null,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "someKey",
                                            "rawText": "someKey",
                                            "flags": 97,
                                            "transformFlags": 0,
                                            "start": 66,
                                            "end": 76
                                        },
                                        "right": {
                                            "kind": 121,
                                            "expression": {
                                                "kind": 132,
                                                "expressions": [
                                                    {
                                                        "kind": 134299649,
                                                        "text": "longLongLongLongLongLongLongLongLongLongLongLongLongLongName",
                                                        "rawText": "longLongLongLongLongLongLongLongLongLongLongLongLongLongName",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 83,
                                                        "end": 143
                                                    },
                                                    {
                                                        "kind": 134299649,
                                                        "text": "shortName",
                                                        "rawText": "shortName",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 144,
                                                        "end": 154
                                                    }
                                                ],
                                                "flags": 32,
                                                "transformFlags": 1024,
                                                "start": 77,
                                                "end": 155
                                            },
                                            "flags": 33,
                                            "transformFlags": 0,
                                            "start": 77,
                                            "end": 155
                                        },
                                        "flags": 32,
                                        "transformFlags": 128,
                                        "start": 66,
                                        "end": 155
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 17,
                                "transformFlags": 0,
                                "start": 66,
                                "end": 155
                            },
                            "flags": 49,
                            "transformFlags": 8,
                            "start": 64,
                            "end": 157
                        },
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 60,
                        "end": 157
                    }
                ],
                "flags": 16777232,
                "transformFlags": 0,
                "start": 60,
                "end": 157
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 53,
            "end": 158
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 37757004,
                "flags": 81,
                "transformFlags": 0,
                "start": 158,
                "end": 165
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "z",
                            "rawText": "z",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 165,
                            "end": 167
                        },
                        "type": null,
                        "initializer": {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [
                                    {
                                        "kind": 219,
                                        "asteriskToken": null,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "someKey",
                                            "rawText": "someKey",
                                            "flags": 97,
                                            "transformFlags": 0,
                                            "start": 171,
                                            "end": 181
                                        },
                                        "right": {
                                            "kind": 121,
                                            "expression": {
                                                "kind": 132,
                                                "expressions": [
                                                    {
                                                        "kind": 134299649,
                                                        "text": "longLongLongLongLongLongLongLongLongLongLongLongLongLongName",
                                                        "rawText": "longLongLongLongLongLongLongLongLongLongLongLongLongLongName",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 188,
                                                        "end": 248
                                                    },
                                                    {
                                                        "kind": 134299649,
                                                        "text": "longLongLongLongLongLongLongLongLongLongLongLongLongLongName",
                                                        "rawText": "longLongLongLongLongLongLongLongLongLongLongLongLongLongName",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 249,
                                                        "end": 310
                                                    },
                                                    {
                                                        "kind": 134299649,
                                                        "text": "longLongLongLongLongLongLongLongLongLongLongLongLongLongName",
                                                        "rawText": "longLongLongLongLongLongLongLongLongLongLongLongLongLongName",
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 311,
                                                        "end": 372
                                                    }
                                                ],
                                                "flags": 32,
                                                "transformFlags": 1024,
                                                "start": 182,
                                                "end": 373
                                            },
                                            "flags": 33,
                                            "transformFlags": 0,
                                            "start": 182,
                                            "end": 373
                                        },
                                        "flags": 32,
                                        "transformFlags": 128,
                                        "start": 171,
                                        "end": 373
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 17,
                                "transformFlags": 0,
                                "start": 171,
                                "end": 373
                            },
                            "flags": 49,
                            "transformFlags": 8,
                            "start": 169,
                            "end": 375
                        },
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 165,
                        "end": 375
                    }
                ],
                "flags": 16777232,
                "transformFlags": 0,
                "start": 165,
                "end": 375
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 158,
            "end": 376
        }
    ],
    "isModule": true,
    "source": "\nconst x = {\n  someKey:\n    (shortName, shortName)\n};\n\nconst y = {\n  someKey:\n    (longLongLongLongLongLongLongLongLongLongLongLongLongLongName, shortName)\n};\n\nconst z = {\n  someKey:\n    (longLongLongLongLongLongLongLongLongLongLongLongLongLongName, longLongLongLongLongLongLongLongLongLongLongLongLongLongName, longLongLongLongLongLongLongLongLongLongLongLongLongLongName)\n};",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 376
}
```

### Printed

```javascript
const x = {
    someKey: (shortName, shortName)
  };
const y = {
    someKey:
      (longLongLongLongLongLongLongLongLongLongLongLongLongLongName, shortName)
  };

const z = {
    someKey:
      (
        longLongLongLongLongLongLongLongLongLongLongLongLongLongName,
        longLongLongLongLongLongLongLongLongLongLongLongLongLongName,
        longLongLongLongLongLongLongLongLongLongLongLongLongLongName
      )
  };

```

### Diagnostics

```javascript
✔ No errors
```

