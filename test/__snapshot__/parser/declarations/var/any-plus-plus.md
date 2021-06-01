# Kataw parser test case

## Input

`````js
var x: any;
x.name = "hello";
var z = x + x;
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
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 3,
                            "end": 5
                        },
                        "optionalToken": null,
                        "type": {
                            "kind": 139,
                            "type": {
                                "kind": 134234252,
                                "flags": 64,
                                "start": 6,
                                "end": 10
                            },
                            "flags": 0,
                            "start": 5,
                            "end": 10
                        },
                        "initializer": null,
                        "flags": 16,
                        "start": 3,
                        "end": 10
                    }
                ],
                "flags": 16,
                "start": 3,
                "end": 10
            },
            "flags": 16,
            "start": 0,
            "end": 11
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 129,
                    "member": {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "start": 11,
                        "end": 13
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "name",
                        "rawText": "name",
                        "flags": 96,
                        "start": 14,
                        "end": 18
                    },
                    "flags": 536870944,
                    "start": 11,
                    "end": 18
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 64,
                    "start": 18,
                    "end": 20
                },
                "right": {
                    "kind": 201392131,
                    "text": "hello",
                    "rawText": "\"hello\"",
                    "flags": 96,
                    "start": 20,
                    "end": 28
                },
                "flags": 32,
                "start": 11,
                "end": 28
            },
            "flags": 16,
            "start": 11,
            "end": 29
        },
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 81,
                "start": 29,
                "end": 33
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "z",
                            "rawText": "z",
                            "flags": 96,
                            "start": 33,
                            "end": 35
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 198,
                            "left": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "start": 37,
                                "end": 39
                            },
                            "operatorToken": {
                                "kind": 99634,
                                "flags": 64,
                                "start": 39,
                                "end": 41
                            },
                            "right": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "start": 41,
                                "end": 43
                            },
                            "flags": 32,
                            "start": 37,
                            "end": 43
                        },
                        "flags": 16,
                        "start": 33,
                        "end": 43
                    }
                ],
                "flags": 16,
                "start": 33,
                "end": 43
            },
            "flags": 16,
            "start": 29,
            "end": 44
        }
    ],
    "isModule": false,
    "source": "var x: any;\nx.name = \"hello\";\nvar z = x + x;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 44
}
```

### Printed

```javascript

var x;
x.name = "\"hello\"";
var z = x + x;
```

### Diagnostics

```javascript
✔ No errors
```

