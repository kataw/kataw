# Kataw parser test case

## Input

`````js
var f = (x): | 1 | 2 => 1;
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
                            "text": "f",
                            "rawText": "f",
                            "flags": 96,
                            "start": 3,
                            "end": 5
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 271,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "start": 20,
                                "end": 23
                            },
                            "typeParameters": null,
                            "parameters": [
                                {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "start": 9,
                                    "end": 10
                                }
                            ],
                            "asyncKeyword": null,
                            "returnType": {
                                "kind": 139,
                                "type": {
                                    "kind": 137,
                                    "types": [
                                        {
                                            "kind": 134217968,
                                            "text": 1,
                                            "flags": 2097216,
                                            "start": 14,
                                            "end": 16
                                        },
                                        {
                                            "kind": 134217968,
                                            "text": 2,
                                            "flags": 2097216,
                                            "start": 18,
                                            "end": 20
                                        }
                                    ],
                                    "flags": 2097152,
                                    "start": 16,
                                    "end": 20
                                },
                                "flags": 2097152,
                                "start": 11,
                                "end": 20
                            },
                            "contents": {
                                "kind": 201392130,
                                "text": 1,
                                "rawText": "1",
                                "flags": 96,
                                "start": 23,
                                "end": 25
                            },
                            "flags": 32,
                            "start": 7,
                            "end": 25
                        },
                        "flags": 16,
                        "start": 3,
                        "end": 25
                    }
                ],
                "flags": 16,
                "start": 3,
                "end": 25
            },
            "flags": 16,
            "start": 0,
            "end": 26
        }
    ],
    "isModule": false,
    "source": "var f = (x): | 1 | 2 => 1;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 26
}
```

### Printed

```javascript

var f = (x) =>  1;
```

### Diagnostics

```javascript
✔ No errors
```

