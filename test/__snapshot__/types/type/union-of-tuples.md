# Kataw parser test case

## Input

`````js
type x = [number] | [string];
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
            "kind": 200,
            "declareToken": null,
            "typeToken": {
                "kind": 24775,
                "flags": 64,
                "start": 0,
                "end": 4
            },
            "name": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 4,
                "end": 6
            },
            "typeParameters": null,
            "assignToken": {
                "kind": 4125,
                "flags": 64,
                "start": 6,
                "end": 8
            },
            "type": {
                "kind": 139,
                "bitwiseOrToken": null,
                "bitwiseAndToken": null,
                "type": {
                    "kind": 137,
                    "types": [
                        {
                            "kind": 147,
                            "elementTypes": [
                                {
                                    "kind": 139,
                                    "bitwiseOrToken": null,
                                    "bitwiseAndToken": null,
                                    "type": {
                                        "kind": 134234345,
                                        "flags": 2097216,
                                        "start": 10,
                                        "end": 16
                                    },
                                    "flags": 2097152,
                                    "start": 10,
                                    "end": 16
                                }
                            ],
                            "trailingComma": false,
                            "flags": 2097152,
                            "start": 8,
                            "end": 17
                        },
                        {
                            "kind": 147,
                            "elementTypes": [
                                {
                                    "kind": 139,
                                    "bitwiseOrToken": null,
                                    "bitwiseAndToken": null,
                                    "type": {
                                        "kind": 134234347,
                                        "flags": 2097216,
                                        "start": 21,
                                        "end": 27
                                    },
                                    "flags": 2097152,
                                    "start": 21,
                                    "end": 27
                                }
                            ],
                            "trailingComma": false,
                            "flags": 2097152,
                            "start": 19,
                            "end": 28
                        }
                    ],
                    "flags": 2097152,
                    "start": 17,
                    "end": 28
                },
                "flags": 2097152,
                "start": 8,
                "end": 28
            },
            "flags": 64,
            "start": 0,
            "end": 29
        }
    ],
    "isModule": false,
    "source": "type x = [number] | [string];",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 29
}
```

### Printed

```javascript

type x = [number ] | [string ]
```

### Diagnostics

```javascript
✔ No errors
```

