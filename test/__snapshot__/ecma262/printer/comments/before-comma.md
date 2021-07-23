# Kataw parser test case

## Input

`````js
 const foo = {
  a: 'a' /* comment for this line */,

  /* Section B */
  b: 'b',
};
`````

## Options

`````js
{ allowTypes : true }

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
                "end": 6
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
                            "start": 6,
                            "end": 10
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
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 97,
                                            "transformFlags": 0,
                                            "start": 14,
                                            "end": 18
                                        },
                                        "right": {
                                            "kind": 201392131,
                                            "text": "a",
                                            "rawText": "'a'",
                                            "flags": 4194400,
                                            "transformFlags": 0,
                                            "start": 19,
                                            "end": 23
                                        },
                                        "flags": 32,
                                        "transformFlags": 128,
                                        "start": 14,
                                        "end": 23
                                    },
                                    {
                                        "kind": 219,
                                        "asteriskToken": null,
                                        "left": {
                                            "kind": 134299649,
                                            "text": "b",
                                            "rawText": "b",
                                            "flags": 97,
                                            "transformFlags": 0,
                                            "start": 52,
                                            "end": 75
                                        },
                                        "right": {
                                            "kind": 201392131,
                                            "text": "b",
                                            "rawText": "'b'",
                                            "flags": 4194400,
                                            "transformFlags": 0,
                                            "start": 76,
                                            "end": 80
                                        },
                                        "flags": 32,
                                        "transformFlags": 128,
                                        "start": 52,
                                        "end": 80
                                    }
                                ],
                                "trailingComma": true,
                                "flags": 17,
                                "transformFlags": 0,
                                "start": 14,
                                "end": 81
                            },
                            "flags": 49,
                            "transformFlags": 8,
                            "start": 12,
                            "end": 83
                        },
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 6,
                        "end": 83
                    }
                ],
                "flags": 16777232,
                "transformFlags": 0,
                "start": 6,
                "end": 83
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 0,
            "end": 84
        }
    ],
    "isModule": false,
    "source": " const foo = {\n  a: 'a' /* comment for this line */,\n\n  /* Section B */\n  b: 'b',\n};",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 84
}
```

### Printed

```javascript
const foo = {
    a: "'a'" /* comment for this line */,
    /* Section B */
    b: "'b'",
  };
```

### Diagnostics

```javascript
✔ No errors
```

