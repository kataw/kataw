# Kataw parser test case

## Input

`````js
var foo: null
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
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 0,
                "start": 0,
                "end": 3
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "original": "foo",
                            "text": "foo",
                            "rawText": " foo",
                            "flags": 96,
                            "start": 3,
                            "end": 7
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "type": {
                                "kind": 138477575,
                                "flags": 64,
                                "start": 8,
                                "end": 13
                            },
                            "flags": 0,
                            "start": 7,
                            "end": 13
                        },
                        "initializer": null,
                        "flags": 16,
                        "start": 3,
                        "end": 13
                    }
                ],
                "flags": 16,
                "start": 3,
                "end": 13
            },
            "flags": 16,
            "start": 0,
            "end": 13
        }
    ],
    "isModule": false,
    "source": "var foo: null",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 13
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

