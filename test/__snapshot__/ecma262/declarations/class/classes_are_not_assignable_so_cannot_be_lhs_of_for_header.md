# Kataw parser test case

## Input

`````js
for (class x { [a](){} } in c);
`````

## Options

### Parser Options

`````js
{}
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 166,
            "forKeyword": {
                "kind": 37757017,
                "flags": 80,
                "transformFlags": 0,
                "start": 0,
                "end": 3
            },
            "initializer": {
                "kind": 189,
                "decorators": null,
                "classKeyword": {
                    "kind": 37822544,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 5,
                    "end": 10
                },
                "name": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 10,
                    "end": 12
                },
                "typeParameters": null,
                "tail": {
                    "kind": 277,
                    "classHeritage": null,
                    "body": {
                        "kind": 303,
                        "elements": [
                            {
                                "kind": 278,
                                "declareToken": null,
                                "decorators": null,
                                "staticKeyword": null,
                                "asyncKeyword": null,
                                "setKeyword": null,
                                "getKeyword": null,
                                "asteriskToken": null,
                                "method": {
                                    "kind": 209,
                                    "name": {
                                        "kind": 194,
                                        "expression": {
                                            "kind": 134299649,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 16,
                                            "end": 17
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 14,
                                        "end": 18
                                    },
                                    "typeParameters": null,
                                    "formalParameterList": {
                                        "kind": 214,
                                        "formalParameters": [],
                                        "trailingComma": false,
                                        "flags": 0,
                                        "transformFlags": 0,
                                        "start": 19,
                                        "end": 20
                                    },
                                    "returnType": null,
                                    "contents": {
                                        "kind": 216,
                                        "functionStatementList": {
                                            "kind": 217,
                                            "directives": [],
                                            "statements": [],
                                            "flags": 32,
                                            "transformFlags": 0,
                                            "start": 21,
                                            "end": 21
                                        },
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 20,
                                        "end": 22
                                    },
                                    "flags": 0,
                                    "transformFlags": 0,
                                    "start": 18,
                                    "end": 22
                                },
                                "flags": 0,
                                "transformFlags": 0,
                                "start": 14,
                                "end": 22
                            }
                        ],
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 14,
                        "end": 22
                    },
                    "flags": 12,
                    "transformFlags": 0,
                    "start": 32,
                    "end": 24
                },
                "flags": 32,
                "transformFlags": 0,
                "start": 5,
                "end": 24
            },
            "inKeyword": {
                "kind": 21006388,
                "flags": 64,
                "transformFlags": 8192,
                "start": 24,
                "end": 27
            },
            "expression": {
                "kind": 134299649,
                "text": "c",
                "rawText": "c",
                "flags": 96,
                "transformFlags": 0,
                "start": 27,
                "end": 29
            },
            "statement": {
                "kind": 168,
                "flags": 16,
                "transformFlags": 0,
                "start": 30,
                "end": 31
            },
            "flags": 80,
            "transformFlags": 0,
            "start": 0,
            "end": 31
        }
    ],
    "isModule": false,
    "source": "for (class x { [a](){} } in c);",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 31
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ The left-hand side of a 'for...in' statement must be a variable or a property access. - start: 27, end: 29

```

