# Kataw parser test case

## Input

`````js
const obsever = mockReducersAndSomething(
  true, // should call reducers
  true, // should mutate state
  ['reducer'],
);
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
                            "text": "obsever",
                            "rawText": "obsever",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 5,
                            "end": 13
                        },
                        "type": null,
                        "initializer": {
                            "kind": 131,
                            "expression": {
                                "kind": 134299649,
                                "text": "mockReducersAndSomething",
                                "rawText": "mockReducersAndSomething",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 15,
                                "end": 40
                            },
                            "argumentList": {
                                "kind": 256,
                                "elements": [
                                    {
                                        "kind": 24752947,
                                        "flags": 97,
                                        "transformFlags": 0,
                                        "start": 41,
                                        "end": 48
                                    },
                                    {
                                        "kind": 24752947,
                                        "flags": 97,
                                        "transformFlags": 0,
                                        "start": 49,
                                        "end": 80
                                    },
                                    {
                                        "kind": 119,
                                        "elementList": {
                                            "kind": 270,
                                            "elements": [
                                                {
                                                    "kind": 201392131,
                                                    "text": "reducer",
                                                    "rawText": "'reducer'",
                                                    "flags": 4194400,
                                                    "transformFlags": 0,
                                                    "start": 108,
                                                    "end": 117
                                                }
                                            ],
                                            "trailingComma": false,
                                            "flags": 4194336,
                                            "transformFlags": 0,
                                            "start": 108,
                                            "end": 117
                                        },
                                        "flags": 33,
                                        "transformFlags": 8,
                                        "start": 81,
                                        "end": 118
                                    }
                                ],
                                "trailingComma": true,
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 41,
                                "end": 119
                            },
                            "flags": 268435488,
                            "transformFlags": 1,
                            "start": 15,
                            "end": 121
                        },
                        "flags": 16,
                        "transformFlags": 128,
                        "start": 5,
                        "end": 121
                    }
                ],
                "flags": 16777232,
                "transformFlags": 0,
                "start": 5,
                "end": 121
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 0,
            "end": 122
        }
    ],
    "isModule": false,
    "source": "const obsever = mockReducersAndSomething(\n  true, // should call reducers\n  true, // should mutate state\n  ['reducer'],\n);",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 122
}
```

### Printed

```javascript

const obsever = mockReducersAndSomething(true, true, ["'reducer'"]);
```

### Diagnostics

```javascript
✔ No errors
```

