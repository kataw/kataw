# Kataw parser test case

## Input

`````js
let one = {
  two(three, this: number) {},
};
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
            "kind": 162,
            "lexicalKeyword": {
                "kind": 41951307,
                "flags": 80,
                "start": 0,
                "end": 3
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "one",
                            "rawText": "one",
                            "flags": 96,
                            "start": 3,
                            "end": 7
                        },
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
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
                                                "text": "two",
                                                "rawText": "two",
                                                "flags": 96,
                                                "start": 11,
                                                "end": 17
                                            },
                                            "typeParameters": null,
                                            "formalParameters": {
                                                "kind": 214,
                                                "formalParameterList": [
                                                    {
                                                        "kind": 134299649,
                                                        "text": "three",
                                                        "rawText": "three",
                                                        "flags": 96,
                                                        "start": 18,
                                                        "end": 23
                                                    },
                                                    {
                                                        "kind": 281,
                                                        "ellipsisToken": null,
                                                        "left": {
                                                            "kind": 134299649,
                                                            "text": "this",
                                                            "rawText": "this",
                                                            "flags": 96,
                                                            "start": 24,
                                                            "end": 29
                                                        },
                                                        "optionalToken": null,
                                                        "type": {
                                                            "kind": 139,
                                                            "type": {
                                                                "kind": 134234345,
                                                                "flags": 2097216,
                                                                "start": 30,
                                                                "end": 37
                                                            },
                                                            "flags": 2097152,
                                                            "start": 29,
                                                            "end": 37
                                                        },
                                                        "right": null,
                                                        "flags": 32,
                                                        "start": 24,
                                                        "end": 37
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 97,
                                                "start": 18,
                                                "end": 38
                                            },
                                            "returnType": null,
                                            "contents": {
                                                "kind": 216,
                                                "functionStatementList": {
                                                    "kind": 217,
                                                    "directives": [],
                                                    "statements": [],
                                                    "flags": 32,
                                                    "start": 40,
                                                    "end": 40
                                                },
                                                "flags": 32,
                                                "start": 38,
                                                "end": 41
                                            },
                                            "flags": 33,
                                            "start": 17,
                                            "end": 41
                                        },
                                        "flags": 32,
                                        "start": 11,
                                        "end": 41
                                    }
                                ],
                                "trailingComma": true,
                                "flags": 17,
                                "start": 11,
                                "end": 42
                            },
                            "flags": 49,
                            "start": 9,
                            "end": 44
                        },
                        "flags": 16,
                        "start": 3,
                        "end": 44
                    }
                ],
                "flags": 16,
                "start": 3,
                "end": 44
            },
            "flags": 33554448,
            "start": 0,
            "end": 45
        }
    ],
    "isModule": false,
    "source": "let one = {\n  two(three, this: number) {},\n};",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 45
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ The `this` parameter must be the first function parameter. - start: 24, end: 29

```

