# Kataw parser test case

## Input

`````js
type A = { [string | boolean]: number };
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
                "text": "A",
                "rawText": "A",
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
                    "kind": 134234353,
                    "properties": [
                        {
                            "kind": 195,
                            "protoKeyword": null,
                            "staticToken": null,
                            "name": null,
                            "key": {
                                "kind": 137,
                                "types": [
                                    {
                                        "kind": 134234347,
                                        "flags": 64,
                                        "start": 12,
                                        "end": 18
                                    },
                                    {
                                        "kind": 134234254,
                                        "flags": 2097216,
                                        "start": 20,
                                        "end": 28
                                    }
                                ],
                                "flags": 2097152,
                                "start": 18,
                                "end": 28
                            },
                            "type": {
                                "kind": 139,
                                "bitwiseOrToken": null,
                                "bitwiseAndToken": null,
                                "type": {
                                    "kind": 134234345,
                                    "flags": 2097216,
                                    "start": 30,
                                    "end": 37
                                },
                                "flags": 2097152,
                                "start": 30,
                                "end": 37
                            },
                            "flags": 2097152,
                            "start": 10,
                            "end": 37
                        }
                    ],
                    "trailingComma": false,
                    "flags": 2097152,
                    "start": 8,
                    "end": 39
                },
                "flags": 2097152,
                "start": 8,
                "end": 39
            },
            "flags": 64,
            "start": 0,
            "end": 40
        }
    ],
    "isModule": false,
    "source": "type A = { [string | boolean]: number };",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 40
}
```

### Printed

```javascript


```

### Diagnostics

```javascript
✔ No errors
```

