# Kataw parser test case

## Input

`````js
type A = ?(?B)
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
                "end": 6
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
                    "kind": 134217970,
                    "nullableToken": {
                        "kind": 134217750,
                        "flags": 64,
                        "start": 8,
                        "end": 10
                    },
                    "type": {
                        "kind": 290,
                        "type": {
                            "kind": 139,
                            "bitwiseOrToken": null,
                            "bitwiseAndToken": null,
                            "type": {
                                "kind": 134217970,
                                "nullableToken": {
                                    "kind": 134217750,
                                    "flags": 64,
                                    "start": 11,
                                    "end": 12
                                },
                                "type": {
                                    "kind": 144,
                                    "name": {
                                        "kind": 134299649,
                                        "text": "B",
                                        "rawText": "B",
                                        "flags": 96,
                                        "start": 12,
                                        "end": 13
                                    },
                                    "typeParameters": null,
                                    "flags": 2097152,
                                    "start": 12,
                                    "end": 13
                                },
                                "flags": 2097152,
                                "start": 11,
                                "end": 13
                            },
                            "flags": 2097152,
                            "start": 11,
                            "end": 13
                        },
                        "flags": 2097152,
                        "start": 10,
                        "end": 14
                    },
                    "flags": 2097152,
                    "start": 8,
                    "end": 14
                },
                "flags": 2097152,
                "start": 8,
                "end": 14
            },
            "flags": 2097152,
            "start": 0,
            "end": 14
        }
    ],
    "isModule": false,
    "source": "type A = ?(?B)",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 14
}
```

### Printed

```javascript

 type A =  
```

### Diagnostics

```javascript
✔ No errors
```

