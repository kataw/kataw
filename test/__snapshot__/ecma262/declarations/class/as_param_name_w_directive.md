# Kataw parser test case

## Input

`````js
class c {foo(eval){ "use strict"; }}
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
                            "staticKeyword": null,
                            "asyncKeyword": null,
                            "setKeyword": null,
                            "getKeyword": null,
                            "asteriskToken": null,
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
                                            "kind": 134299649,
                                            "text": "eval",
                                            "rawText": "eval",
                                            "flags": 96,
                                            "start": 13,
                                            "end": 17
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 96,
                                    "start": 13,
                                    "end": 18
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
                                                "start": 19,
                                                "end": 32
                                            }
                                        ],
                                        "statements": [],
                                        "flags": 32,
                                        "start": 19,
                                        "end": 33
                                    },
                                    "flags": 32,
                                    "start": 18,
                                    "end": 35
                                },
                                "flags": 0,
                                "start": 12,
                                "end": 35
                            },
                            "flags": 0,
                            "start": 9,
                            "end": 35
                        }
                    ],
                    "flags": 32,
                    "start": 9,
                    "end": 35
                },
                "flags": 7,
                "start": 32,
                "end": 36
            },
            "flags": 16,
            "start": 0,
            "end": 36
        }
    ],
    "isModule": false,
    "source": "class c {foo(eval){ \"use strict\"; }}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 36
}
```

### Printed

```javascript

class c {
  foo(eval) {
  "\"use strict\"";
  }
}

```

### Diagnostics

```javascript
✔ No errors
```

