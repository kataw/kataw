# Kataw parser test case

## Input

`````js
class c {foo(x=eval=y){ "use strict"; }}
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 178,
            "declareKeyword": null,
            "decorators": null,
            "classKeyword": {
                "kind": 37822544,
                "flags": 80,
                "start": 0,
                "end": 5
            },
            "name": {
                "kind": 134299649,
                "text": "c",
                "rawText": "c",
                "flags": 96,
                "start": 5,
                "end": 7
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
                            "asteriskToken": null,
                            "staticKeyword": null,
                            "asyncKeyword": null,
                            "setKeyword": null,
                            "getKeyword": null,
                            "method": {
                                "kind": 209,
                                "name": {
                                    "kind": 134299649,
                                    "text": "foo",
                                    "rawText": "foo",
                                    "flags": 96,
                                    "start": 9,
                                    "end": 12
                                },
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [
                                        {
                                            "kind": 281,
                                            "ellipsisToken": null,
                                            "left": {
                                                "kind": 134299649,
                                                "text": "x",
                                                "rawText": "x",
                                                "flags": 96,
                                                "start": 13,
                                                "end": 14
                                            },
                                            "optionalToken": null,
                                            "type": null,
                                            "right": {
                                                "kind": 125,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": "eval",
                                                    "rawText": "eval",
                                                    "flags": 96,
                                                    "start": 15,
                                                    "end": 19
                                                },
                                                "operatorToken": {
                                                    "kind": 4125,
                                                    "flags": 96,
                                                    "start": 19,
                                                    "end": 20
                                                },
                                                "right": {
                                                    "kind": 134299649,
                                                    "text": "y",
                                                    "rawText": "y",
                                                    "flags": 96,
                                                    "start": 20,
                                                    "end": 21
                                                },
                                                "flags": 32,
                                                "start": 15,
                                                "end": 21
                                            },
                                            "flags": 34,
                                            "start": 13,
                                            "end": 21
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 34,
                                    "start": 13,
                                    "end": 22
                                },
                                "returnType": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [
                                            {
                                                "kind": 201392131,
                                                "text": "use strict",
                                                "rawText": "\"use strict\"",
                                                "flags": 96,
                                                "start": 23,
                                                "end": 36
                                            }
                                        ],
                                        "statements": [],
                                        "flags": 32,
                                        "start": 23,
                                        "end": 37
                                    },
                                    "flags": 32,
                                    "start": 22,
                                    "end": 39
                                },
                                "flags": 0,
                                "start": 12,
                                "end": 39
                            },
                            "flags": 0,
                            "start": 9,
                            "end": 39
                        }
                    ],
                    "flags": 32,
                    "start": 9,
                    "end": 39
                },
                "flags": 7,
                "start": 32,
                "end": 40
            },
            "flags": 16,
            "start": 0,
            "end": 40
        }
    ],
    "isModule": false,
    "source": "class c {foo(x=eval=y){ \"use strict\"; }}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 40
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Cannot assign to 'eval' and 'arguments' because they are not a variable - start: 19, end: 20
✖ 'use strict' directive cannot be used with non-simple parameter list. - start: 13, end: 37

```

