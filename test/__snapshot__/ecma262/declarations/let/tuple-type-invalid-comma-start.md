# Kataw parser test case

## Input

`````js
let x: [,] = y;
`````

## Options

### Parser Options

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
                        "type": {
                            "kind": 139,
                            "bitwiseOrToken": null,
                            "bitwiseAndToken": null,
                            "type": {
                                "kind": 147,
                                "elementTypes": [],
                                "trailingComma": false,
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 6,
                                "end": 8
                            },
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 6,
                            "end": 8
                        },
                        "initializer": null,
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 3,
                        "end": 8
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 3,
                "end": 9
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 0,
            "end": 9
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "y",
                "rawText": "y",
                "flags": 96,
                "transformFlags": 0,
                "start": 12,
                "end": 14
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 12,
            "end": 15
        }
    ],
    "isModule": false,
    "source": "let x: [,] = y;",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 15
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Trailing comma not allowed. - start: 9, end: 10
✖ ']' is not allowed here. Did you mean ';'? - start: 9, end: 10
✖ Declaration or statement expected - start: 10, end: 12

```

