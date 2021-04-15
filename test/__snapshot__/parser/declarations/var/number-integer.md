# Kataw parser test case

## Input

`````js
var a: 123
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
                "flags": 768,
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
                            "text": "a",
                            "rawText": "a",
                            "flags": 768,
                            "start": 3,
                            "end": 5
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "type": {
                                "kind": 134217968,
                                "value": 123,
                                "flags": 0,
                                "start": 6,
                                "end": 10
                            },
                            "flags": 0,
                            "start": 5,
                            "end": 10
                        },
                        "initializer": null,
                        "flags": 128,
                        "start": 3,
                        "end": 10
                    }
                ],
                "flags": 128,
                "start": 3,
                "end": 10
            },
            "flags": 128,
            "start": 0,
            "end": 10
        }
    ],
    "isModule": false,
    "text": "var a: 123",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 10
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

