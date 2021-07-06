# Kataw parser test case

## Input

`````js
declare var x: symbol;
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
            "kind": 155,
            "declareKeyword": {
                "kind": 82165,
                "flags": 64,
                "transformFlags": 0,
                "start": 0,
                "end": 7
            },
            "varKeyword": {
                "kind": 37757002,
                "flags": 80,
                "transformFlags": 0,
                "start": 7,
                "end": 11
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 11,
                            "end": 13
                        },
                        "type": {
                            "kind": 139,
                            "bitwiseOrToken": null,
                            "bitwiseAndToken": null,
                            "type": {
                                "kind": 134234343,
                                "flags": 2097216,
                                "transformFlags": 0,
                                "start": 14,
                                "end": 21
                            },
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 14,
                            "end": 21
                        },
                        "initializer": null,
                        "flags": 16,
                        "transformFlags": 128,
                        "start": 11,
                        "end": 21
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 11,
                "end": 21
            },
            "flags": 4112,
            "transformFlags": 0,
            "start": 7,
            "end": 22
        }
    ],
    "isModule": false,
    "source": "declare var x: symbol;",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 22
}
```

### Printed

```javascript

declare var x: symbol;
```

### Diagnostics

```javascript
✔ No errors
```

