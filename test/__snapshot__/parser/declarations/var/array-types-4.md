# Kataw parser test case

## Input

`````js
var a: number
[]
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
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 80,
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
                            "flags": 96,
                            "start": 3,
                            "end": 5
                        },
                        "type": {
                            "kind": 139,
                            "bitwiseOrToken": null,
                            "bitwiseAndToken": null,
                            "type": {
                                "kind": 134234345,
                                "flags": 2097216,
                                "start": 6,
                                "end": 13
                            },
                            "flags": 2097152,
                            "start": 6,
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
        },
        {
            "kind": 120,
            "expression": {
                "kind": 119,
                "elementList": {
                    "kind": 270,
                    "elements": [],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 15,
                    "end": 15
                },
                "flags": 33,
                "start": 13,
                "end": 16
            },
            "flags": 16,
            "start": 13,
            "end": 16
        }
    ],
    "isModule": false,
    "source": "var a: number\n[]",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 16
}
```

### Printed

```javascript

 var a number; []; 
```

### Diagnostics

```javascript
✔ No errors
```

