# Kataw parser test case

## Input

`````js
({
    constructor(this: number){}
})
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
                "kind": 121,
                "expression": {
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [
                            {
                                "kind": 257,
                                "asyncKeyword": null,
                                "generatorToken": null,
                                "getKeyword": null,
                                "setKeyword": null,
                                "method": {
                                    "kind": 209,
                                    "name": {
                                        "kind": 134299649,
                                        "text": "constructor",
                                        "rawText": "constructor",
                                        "flags": 96,
                                        "start": 2,
                                        "end": 18
                                    },
                                    "typeParameters": null,
                                    "formalParameters": {
                                        "kind": 214,
                                        "formalParameterList": [
                                            {
                                                "kind": 215,
                                                "ellipsisToken": null,
                                                "binding": {
                                                    "kind": 134299649,
                                                    "text": "this",
                                                    "rawText": "this",
                                                    "flags": 96,
                                                    "start": 19,
                                                    "end": 23
                                                },
                                                "optionalToken": null,
                                                "type": null,
                                                "initializer": null,
                                                "flags": 32,
                                                "start": 19,
                                                "end": 23
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 32,
                                        "start": 19,
                                        "end": 24
                                    },
                                    "type": {
                                        "kind": 139,
                                        "type": {
                                            "kind": 134234345,
                                            "flags": 64,
                                            "start": 24,
                                            "end": 31
                                        },
                                        "flags": 0,
                                        "start": 18,
                                        "end": 31
                                    },
                                    "contents": null,
                                    "flags": 32,
                                    "start": 18,
                                    "end": 31
                                },
                                "flags": 32,
                                "start": 2,
                                "end": 31
                            }
                        ],
                        "trailingComma": false,
                        "flags": 17,
                        "start": 2,
                        "end": 31
                    },
                    "flags": 49,
                    "start": 1,
                    "end": 31
                },
                "flags": 32,
                "start": 0,
                "end": 32
            },
            "flags": 16,
            "start": 0,
            "end": 32
        },
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [],
                "flags": 16,
                "start": 33,
                "end": 33
            },
            "flags": 16,
            "start": 32,
            "end": 34
        }
    ],
    "isModule": false,
    "source": "({\n    constructor(this: number){}\n})",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 37
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ ',' expected - start: 23, end: 24
✖ Expected a ')' to match the '(' token here - start: 23, end: 24
✖ ',' expected - start: 31, end: 32
✖ The parser expected to find a '}' to match the '{' token here - start: 31, end: 32
✖ Expected a `;` - start: 32, end: 33
✖ Declaration or statement expected - start: 34, end: 36
✖ Declaration or statement expected - start: 36, end: 37

```

