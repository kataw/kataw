# Kataw parser test case

## Input

`````js
let x: -1n;
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
                                "kind": 313,
                                "subtractionToken": {
                                    "kind": 134318643,
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 6,
                                    "end": 8
                                },
                                "text": "1",
                                "rawText": "1n",
                                "flags": 2097216,
                                "transformFlags": 0,
                                "start": 6,
                                "end": 10
                            },
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 6,
                            "end": 10
                        },
                        "initializer": null,
                        "flags": 16,
                        "transformFlags": 128,
                        "start": 3,
                        "end": 10
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 3,
                "end": 10
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 0,
            "end": 11
        }
    ],
    "isModule": false,
    "source": "let x: -1n;",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 11
}
```

### Printed

```javascript
let x: -1n;
```

### Diagnostics

```javascript
✔ No errors
```

