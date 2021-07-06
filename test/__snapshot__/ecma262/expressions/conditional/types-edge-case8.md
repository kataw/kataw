# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true, allowTypes: true }
`````

## Input

`````js
let x = a ? (b, c) : (d, e)
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
                "kind": 41951307,
                "flags": 80,
                "transformFlags": 0,
                "start": 0,
                "end": 3
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
                            "start": 3,
                            "end": 5
                        },
                        "type": null,
                        "initializer": {
                            "kind": 197,
                            "shortCircuit": {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 7,
                                "end": 9
                            },
                            "questionToken": {
                                "kind": 134217750,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 9,
                                "end": 11
                            },
                            "consequent": {
                                "kind": 121,
                                "expression": {
                                    "kind": 132,
                                    "expressions": [
                                        {
                                            "kind": 134299649,
                                            "text": "b",
                                            "rawText": "b",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 13,
                                            "end": 14
                                        },
                                        {
                                            "kind": 134299649,
                                            "text": "c",
                                            "rawText": "c",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 15,
                                            "end": 17
                                        }
                                    ],
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 11,
                                    "end": 18
                                },
                                "flags": 11,
                                "transformFlags": 0,
                                "start": 32,
                                "end": 18
                            },
                            "colonToken": {
                                "kind": 21,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 18,
                                "end": 20
                            },
                            "alternate": {
                                "kind": 121,
                                "expression": {
                                    "kind": 132,
                                    "expressions": [
                                        {
                                            "kind": 134299649,
                                            "text": "d",
                                            "rawText": "d",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 22,
                                            "end": 23
                                        },
                                        {
                                            "kind": 134299649,
                                            "text": "e",
                                            "rawText": "e",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 24,
                                            "end": 26
                                        }
                                    ],
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 20,
                                    "end": 27
                                },
                                "flags": 20,
                                "transformFlags": 0,
                                "start": 32,
                                "end": 27
                            },
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 7,
                            "end": 27
                        },
                        "flags": 16,
                        "transformFlags": 128,
                        "start": 3,
                        "end": 27
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 3,
                "end": 27
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 0,
            "end": 27
        }
    ],
    "isModule": true,
    "source": "let x = a ? (b, c) : (d, e)",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 27
}
```

### Printed

```javascript

let x = a ? (b, c) : (d, e);
```

### Diagnostics

```javascript
✔ No errors
```

