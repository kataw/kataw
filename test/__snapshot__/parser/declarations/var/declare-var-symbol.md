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

### Hybrid CST

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
                "start": 0,
                "end": 7
            },
            "varKeyword": {
                "kind": 37757002,
                "flags": 0,
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
                            "start": 11,
                            "end": 13
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "type": {
                                "kind": 134234343,
                                "flags": 64,
                                "start": 14,
                                "end": 21
                            },
                            "flags": 0,
                            "start": 13,
                            "end": 21
                        },
                        "initializer": null,
                        "flags": 16,
                        "start": 11,
                        "end": 21
                    }
                ],
                "flags": 16,
                "start": 11,
                "end": 21
            },
            "flags": 4112,
            "start": 7,
            "end": 22
        }
    ],
    "isModule": false,
    "source": "declare var x: symbol;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 22
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✔ No errors
```

