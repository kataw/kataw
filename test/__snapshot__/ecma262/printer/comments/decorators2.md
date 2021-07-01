# Kataw parser test case

## Input

`````js
class x {

@

/*1*/

foo /* 2*/ bar() {}

}
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
                "text": "x",
                "rawText": "x",
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
                            "decorators": {
                                "kind": 207,
                                "elements": [
                                    {
                                        "kind": 34611453,
                                        "decoratorToken": {
                                            "kind": 34611453,
                                            "flags": 65,
                                            "start": 9,
                                            "end": 12
                                        },
                                        "expression": {
                                            "kind": 134299649,
                                            "text": "foo",
                                            "rawText": "foo",
                                            "flags": 96,
                                            "start": 12,
                                            "end": 24
                                        },
                                        "flags": 1,
                                        "start": 12,
                                        "end": 24
                                    }
                                ],
                                "flags": 32,
                                "start": 9,
                                "end": 24
                            },
                            "staticKeyword": null,
                            "asyncKeyword": null,
                            "setKeyword": null,
                            "getKeyword": null,
                            "asteriskToken": null,
                            "method": {
                                "kind": 209,
                                "name": {
                                    "kind": 134299649,
                                    "text": "bar",
                                    "rawText": "bar",
                                    "flags": 96,
                                    "start": 24,
                                    "end": 35
                                },
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "start": 36,
                                    "end": 37
                                },
                                "returnType": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [],
                                        "flags": 32,
                                        "start": 39,
                                        "end": 39
                                    },
                                    "flags": 32,
                                    "start": 37,
                                    "end": 40
                                },
                                "flags": 0,
                                "start": 35,
                                "end": 40
                            },
                            "flags": 0,
                            "start": 9,
                            "end": 40
                        }
                    ],
                    "flags": 32,
                    "start": 9,
                    "end": 40
                },
                "flags": 7,
                "start": 32,
                "end": 43
            },
            "flags": 16,
            "start": 0,
            "end": 43
        }
    ],
    "isModule": false,
    "source": "class x {\n\n@\n\n/*1*/\n\nfoo /* 2*/ bar() {}\n\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 43
}
```

### Printed

```javascript

class x {
   /*1*/
  @foo/* 2*/
  bar() {}
}

```

### Diagnostics

```javascript
✔ No errors
```

