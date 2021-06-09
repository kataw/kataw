# Kataw parser test case

## Input

`````js
'use strict'; let {0123: x} = y
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [
        {
            "kind": 201392131,
            "text": "use strict",
            "rawText": "'use strict'",
            "flags": 4194400,
            "start": 0,
            "end": 12
        }
    ],
    "statements": [
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 41951307,
                "flags": 80,
                "start": 13,
                "end": 17
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
                                "properties": [
                                    {
                                        "kind": 204,
                                        "ellipsisToken": null,
                                        "key": {
                                            "kind": 201392130,
                                            "text": 123,
                                            "rawText": "0123",
                                            "flags": 96,
                                            "start": 19,
                                            "end": 23
                                        },
                                        "value": {
                                            "kind": 134299649,
                                            "text": "x",
                                            "rawText": "x",
                                            "flags": 96,
                                            "start": 24,
                                            "end": 26
                                        },
                                        "initializer": null,
                                        "flags": 32,
                                        "start": 19,
                                        "end": 26
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 19,
                                "end": 26
                            },
                            "flags": 32,
                            "start": 17,
                            "end": 27
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 134299649,
                            "text": "y",
                            "rawText": "y",
                            "flags": 96,
                            "start": 29,
                            "end": 31
                        },
                        "flags": 16,
                        "start": 17,
                        "end": 31
                    }
                ],
                "flags": 16,
                "start": 17,
                "end": 31
            },
            "flags": 33554448,
            "start": 13,
            "end": 31
        }
    ],
    "isModule": false,
    "source": "'use strict'; let {0123: x} = y",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 31
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Octal literals are not allowed in strict mode - start: 19, end: 20

```

