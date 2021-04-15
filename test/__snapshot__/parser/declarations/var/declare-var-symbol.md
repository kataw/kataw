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
                "flags": 768,
                "start": 0,
                "end": 7
            },
            "varKeyword": {
                "kind": 37757002,
                "flags": 768,
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
                            "flags": 768,
                            "start": 11,
                            "end": 13
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "type": {
                                "kind": 134234343,
                                "flags": 768,
                                "start": 14,
                                "end": 21
                            },
                            "flags": 0,
                            "start": 13,
                            "end": 21
                        },
                        "initializer": null,
                        "flags": 128,
                        "start": 11,
                        "end": 21
                    }
                ],
                "flags": 128,
                "start": 11,
                "end": 21
            },
            "flags": 32896,
            "start": 7,
            "end": 22
        }
    ],
    "isModule": false,
    "text": "declare var x: symbol;",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 22
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

