# Kataw parser test case

## Options

`````js
{ jsx: false, disableWebCompat: true, module: true }
`````


## Input

`````js
var obj = {};

obj.c\u0061se = 42;
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
                            "text": "obj",
                            "rawText": "obj",
                            "flags": 96,
                            "start": 3,
                            "end": 7
                        },
                        "type": null,
                        "initializer": {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [],
                                "trailingComma": false,
                                "flags": 16,
                                "start": 11,
                                "end": 11
                            },
                            "flags": 48,
                            "start": 9,
                            "end": 12
                        },
                        "flags": 16,
                        "start": 3,
                        "end": 12
                    }
                ],
                "flags": 16,
                "start": 3,
                "end": 12
            },
            "flags": 16,
            "start": 0,
            "end": 13
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 129,
                    "member": {
                        "kind": 134299649,
                        "text": "obj",
                        "rawText": "obj",
                        "flags": 96,
                        "start": 13,
                        "end": 18
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "case",
                        "rawText": "c\\u0061se",
                        "flags": 96,
                        "start": 19,
                        "end": 28
                    },
                    "flags": 536870944,
                    "start": 13,
                    "end": 28
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "start": 28,
                    "end": 30
                },
                "right": {
                    "kind": 201392130,
                    "text": 42,
                    "rawText": "42",
                    "flags": 96,
                    "start": 30,
                    "end": 33
                },
                "flags": 32,
                "start": 13,
                "end": 33
            },
            "flags": 16,
            "start": 13,
            "end": 34
        }
    ],
    "isModule": true,
    "source": "var obj = {};\n\nobj.c\\u0061se = 42;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 34
}
```

### Printed

```javascript

var obj = {};
obj.case = 42;
```

### Diagnostics

```javascript
✔ No errors
```

