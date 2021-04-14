# Kataw parser test case

## Input

`````js
let {,x} = obj;
`````

## Options

### Parser Options

`````js
{}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 41951307,
                "flags": 768,
                "start": 0,
                "end": 3
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 212,
                            "propertyList": {
                                "kind": 213,
                                "properties": [],
                                "multiline": false,
                                "trailingComma": false,
                                "flags": 256,
                                "start": 5,
                                "end": 5
                            },
                            "flags": 256,
                            "start": 3,
                            "end": 5
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 128,
                        "start": 3,
                        "end": 5
                    },
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 81921,
                            "text": "x",
                            "rawText": "x",
                            "flags": 768,
                            "start": 6,
                            "end": 7
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": null,
                        "flags": 128,
                        "start": 6,
                        "end": 7
                    }
                ],
                "flags": 128,
                "start": 3,
                "end": 7
            },
            "flags": 128,
            "start": 0,
            "end": 7
        },
        {
            "kind": 120,
            "expression": {
                "kind": 81921,
                "text": "obj",
                "rawText": "obj",
                "flags": 768,
                "start": 10,
                "end": 14
            },
            "flags": 128,
            "start": 10,
            "end": 15
        }
    ],
    "isModule": false,
    "text": "let {,x} = obj;",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 5,
            "end": 6
        },
        {
            "kind": 2,
            "source": 2,
            "code": 12,
            "error": "Missing initializer in destructuring declaration",
            "start": 5,
            "end": 6
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 7,
            "end": 8
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 8,
            "end": 10
        }
    ],
    "start": 0,
    "end": 15
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
@{x2714}@ No errors
```

