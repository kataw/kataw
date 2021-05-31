# Kataw parser test case

## Options

`````js
{ jsx: false, disableWebCompat: true, module: true }
`````

## Input

`````js
({ a: (foo.qux) } = {}) => {}
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 23,
                    "end": 26
                },
                "typeParameters": null,
                "parameters": [
                    {
                        "kind": 281,
                        "ellipsisToken": null,
                        "left": {
                            "kind": 212,
                            "propertyList": {
                                "kind": 213,
                                "properties": [
                                    {
                                        "kind": 204,
                                        "ellipsisToken": null,
                                        "key": {
                                            "kind": 134299649,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 96,
                                            "start": 2,
                                            "end": 4
                                        },
                                        "value": {
                                            "kind": 121,
                                            "expression": {
                                                "kind": 129,
                                                "member": {
                                                    "kind": 134299649,
                                                    "text": "foo",
                                                    "rawText": "foo",
                                                    "flags": 96,
                                                    "start": 7,
                                                    "end": 10
                                                },
                                                "expression": {
                                                    "kind": 134299649,
                                                    "text": "qux",
                                                    "rawText": "qux",
                                                    "flags": 96,
                                                    "start": 11,
                                                    "end": 14
                                                },
                                                "flags": 536870944,
                                                "start": 5,
                                                "end": 14
                                            },
                                            "flags": 32,
                                            "start": 5,
                                            "end": 15
                                        },
                                        "initializer": null,
                                        "flags": 32,
                                        "start": 2,
                                        "end": 15
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 2,
                                "end": 15
                            },
                            "flags": 32,
                            "start": 1,
                            "end": 17
                        },
                        "optionalToken": null,
                        "type": null,
                        "right": {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [],
                                "trailingComma": false,
                                "flags": 16,
                                "start": 21,
                                "end": 21
                            },
                            "flags": 48,
                            "start": 19,
                            "end": 22
                        },
                        "flags": 32,
                        "start": 1,
                        "end": 22
                    }
                ],
                "asyncKeyword": null,
                "returnType": null,
                "contents": {
                    "kind": 216,
                    "functionStatementList": {
                        "kind": 217,
                        "directives": [],
                        "statements": [],
                        "flags": 32,
                        "start": 28,
                        "end": 28
                    },
                    "flags": 32,
                    "start": 26,
                    "end": 29
                },
                "flags": 34,
                "start": 0,
                "end": 29
            },
            "flags": 16,
            "start": 0,
            "end": 29
        }
    ],
    "isModule": true,
    "source": "({ a: (foo.qux) } = {}) => {}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 29
}
```

### Printed

```javascript

({
  a: (foo.qux)
} = {}) =>  {};
```

### Diagnostics

```javascript
✔ No errors
```

