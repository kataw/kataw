# Kataw parser test case

## Input

`````js
var numVal:number = otherNumVal;

var a: { [a: number]: string; [b: number]: string; };
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
                            "text": "numVal",
                            "rawText": "numVal",
                            "flags": 96,
                            "start": 3,
                            "end": 10
                        },
                        "type": {
                            "kind": 139,
                            "bitwiseOrToken": null,
                            "bitwiseAndToken": null,
                            "type": {
                                "kind": 134234345,
                                "flags": 2097216,
                                "start": 11,
                                "end": 17
                            },
                            "flags": 2097152,
                            "start": 11,
                            "end": 17
                        },
                        "initializer": {
                            "kind": 134299649,
                            "text": "otherNumVal",
                            "rawText": "otherNumVal",
                            "flags": 96,
                            "start": 19,
                            "end": 31
                        },
                        "flags": 16,
                        "start": 3,
                        "end": 31
                    }
                ],
                "flags": 16,
                "start": 3,
                "end": 31
            },
            "flags": 16,
            "start": 0,
            "end": 32
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 81,
                "start": 32,
                "end": 37
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
                            "start": 37,
                            "end": 39
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
                                        "staticKeyword": null,
                                        "name": {
                                            "kind": 134299649,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 96,
                                            "start": 44,
                                            "end": 45
                                        },
                                        "key": {
                                            "kind": 139,
                                            "bitwiseOrToken": null,
                                            "bitwiseAndToken": null,
                                            "type": {
                                                "kind": 134234345,
                                                "flags": 2097216,
                                                "start": 46,
                                                "end": 53
                                            },
                                            "flags": 2097152,
                                            "start": 46,
                                            "end": 53
                                        },
                                        "type": {
                                            "kind": 139,
                                            "bitwiseOrToken": null,
                                            "bitwiseAndToken": null,
                                            "type": {
                                                "kind": 134234347,
                                                "flags": 2097216,
                                                "start": 55,
                                                "end": 62
                                            },
                                            "flags": 2097152,
                                            "start": 55,
                                            "end": 62
                                        },
                                        "flags": 2097152,
                                        "start": 42,
                                        "end": 63
                                    },
                                    {
                                        "kind": 195,
                                        "protoKeyword": null,
                                        "staticKeyword": null,
                                        "name": {
                                            "kind": 134299649,
                                            "text": "b",
                                            "rawText": "b",
                                            "flags": 96,
                                            "start": 65,
                                            "end": 66
                                        },
                                        "key": {
                                            "kind": 139,
                                            "bitwiseOrToken": null,
                                            "bitwiseAndToken": null,
                                            "type": {
                                                "kind": 134234345,
                                                "flags": 2097216,
                                                "start": 67,
                                                "end": 74
                                            },
                                            "flags": 2097152,
                                            "start": 67,
                                            "end": 74
                                        },
                                        "type": {
                                            "kind": 139,
                                            "bitwiseOrToken": null,
                                            "bitwiseAndToken": null,
                                            "type": {
                                                "kind": 134234347,
                                                "flags": 2097216,
                                                "start": 76,
                                                "end": 83
                                            },
                                            "flags": 2097152,
                                            "start": 76,
                                            "end": 83
                                        },
                                        "flags": 2097152,
                                        "start": 63,
                                        "end": 84
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 2097152,
                                "start": 40,
                                "end": 86
                            },
                            "flags": 2097152,
                            "start": 40,
                            "end": 86
                        },
                        "initializer": null,
                        "flags": 16,
                        "start": 37,
                        "end": 86
                    }
                ],
                "flags": 16,
                "start": 37,
                "end": 86
            },
            "flags": 16,
            "start": 32,
            "end": 87
        }
    ],
    "isModule": false,
    "source": "var numVal:number = otherNumVal;\n\nvar a: { [a: number]: string; [b: number]: string; };",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 87
}
```

### Printed

```javascript

var  numVal: number = otherNumVal ;
var  a: { [anumber]:  string, [bnumber]:  string } ;

```

### Diagnostics

```javascript
✔ No errors
```

