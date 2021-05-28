# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true }
`````

## Input

`````js
var foo = 1;

export var name1 = await foo;
export var { x = await foo } = {};
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
                            "text": "foo",
                            "rawText": "foo",
                            "flags": 96,
                            "start": 3,
                            "end": 7
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 201392130,
                            "text": 1,
                            "rawText": "1",
                            "flags": 96,
                            "start": 9,
                            "end": 11
                        },
                        "flags": 16,
                        "start": 3,
                        "end": 11
                    }
                ],
                "flags": 16,
                "start": 3,
                "end": 11
            },
            "flags": 16,
            "start": 0,
            "end": 12
        },
        {
            "kind": 257,
            "exportKeyword": {
                "kind": 4202582,
                "flags": 1,
                "start": 12,
                "end": 20
            },
            "declaration": {
                "kind": 155,
                "declareKeyword": null,
                "varKeyword": {
                    "kind": 37757002,
                    "flags": 0,
                    "start": 20,
                    "end": 24
                },
                "declarationList": {
                    "kind": 156,
                    "declarations": [
                        {
                            "kind": 157,
                            "binding": {
                                "kind": 134299649,
                                "text": "name1",
                                "rawText": "name1",
                                "flags": 96,
                                "start": 24,
                                "end": 30
                            },
                            "optionalToken": null,
                            "type": null,
                            "initializer": {
                                "kind": 208,
                                "awaitKeyword": {
                                    "kind": 82196,
                                    "flags": 0,
                                    "start": 32,
                                    "end": 38
                                },
                                "expression": {
                                    "kind": 134299649,
                                    "text": "foo",
                                    "rawText": "foo",
                                    "flags": 96,
                                    "start": 38,
                                    "end": 42
                                },
                                "flags": 32,
                                "start": 32,
                                "end": 42
                            },
                            "flags": 16,
                            "start": 24,
                            "end": 42
                        }
                    ],
                    "flags": 16,
                    "start": 24,
                    "end": 42
                },
                "flags": 16,
                "start": 20,
                "end": 43
            },
            "namedExports": null,
            "exportFromClause": null,
            "fromClause": null,
            "exportKind": 0,
            "flags": 16,
            "start": 12,
            "end": 43
        },
        {
            "kind": 257,
            "exportKeyword": {
                "kind": 4202582,
                "flags": 1,
                "start": 43,
                "end": 50
            },
            "declaration": {
                "kind": 155,
                "declareKeyword": null,
                "varKeyword": {
                    "kind": 37757002,
                    "flags": 0,
                    "start": 50,
                    "end": 54
                },
                "declarationList": {
                    "kind": 156,
                    "declarations": [
                        {
                            "kind": 157,
                            "binding": {
                                "kind": 212,
                                "propertyList": {
                                    "kind": 213,
                                    "properties": [
                                        {
                                            "kind": 222,
                                            "ellipsisToken": null,
                                            "left": {
                                                "kind": 134299649,
                                                "text": "x",
                                                "rawText": "x",
                                                "flags": 96,
                                                "start": 56,
                                                "end": 58
                                            },
                                            "right": {
                                                "kind": 208,
                                                "awaitKeyword": {
                                                    "kind": 82196,
                                                    "flags": 0,
                                                    "start": 60,
                                                    "end": 66
                                                },
                                                "expression": {
                                                    "kind": 134299649,
                                                    "text": "foo",
                                                    "rawText": "foo",
                                                    "flags": 96,
                                                    "start": 66,
                                                    "end": 70
                                                },
                                                "flags": 32,
                                                "start": 60,
                                                "end": 70
                                            },
                                            "flags": 32,
                                            "start": 56,
                                            "end": 70
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 56,
                                    "end": 70
                                },
                                "flags": 32,
                                "start": 54,
                                "end": 72
                            },
                            "optionalToken": null,
                            "type": null,
                            "initializer": {
                                "kind": 220,
                                "propertyList": {
                                    "kind": 218,
                                    "properties": [],
                                    "trailingComma": false,
                                    "flags": 16,
                                    "start": 76,
                                    "end": 76
                                },
                                "flags": 48,
                                "start": 74,
                                "end": 77
                            },
                            "flags": 16,
                            "start": 54,
                            "end": 77
                        }
                    ],
                    "flags": 16,
                    "start": 54,
                    "end": 77
                },
                "flags": 16,
                "start": 50,
                "end": 78
            },
            "namedExports": null,
            "exportFromClause": null,
            "fromClause": null,
            "exportKind": 0,
            "flags": 16,
            "start": 43,
            "end": 78
        }
    ],
    "isModule": true,
    "source": "var foo = 1;\n\nexport var name1 = await foo;\nexport var { x = await foo } = {};",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 78
}
```

### Printed

```javascript

var foo = 1;
export var name1 = await foo;
export var {
  x = await foo
} = {};
```

### Diagnostics

```javascript
✔ No errors
```

