# Kataw parser test case

## Input

`````js
class Foo { #foo; foo() { delete this?.#foo } }
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
                "transformFlags": 0,
                "start": 0,
                "end": 5
            },
            "name": {
                "kind": 134299649,
                "text": "Foo",
                "rawText": "Foo",
                "flags": 96,
                "transformFlags": 0,
                "start": 5,
                "end": 9
            },
            "typeParameters": null,
            "tail": {
                "kind": 277,
                "classHeritage": null,
                "body": {
                    "kind": 303,
                    "elements": [
                        {
                            "kind": 280,
                            "decorators": null,
                            "declaredToken": null,
                            "staticKeyword": null,
                            "asyncKeyword": null,
                            "key": {
                                "kind": 134299649,
                                "text": "#foo",
                                "rawText": "#foo",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 11,
                                "end": 16
                            },
                            "optionalToken": null,
                            "type": null,
                            "initializer": null,
                            "flags": 32,
                            "transformFlags": 128,
                            "start": 11,
                            "end": 16
                        },
                        {
                            "kind": 1108353041,
                            "flags": 64,
                            "transformFlags": 0,
                            "start": 16,
                            "end": 17
                        },
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
                                    "transformFlags": 0,
                                    "start": 17,
                                    "end": 21
                                },
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "transformFlags": 0,
                                    "start": 22,
                                    "end": 23
                                },
                                "returnType": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [
                                            {
                                                "kind": 120,
                                                "expression": {
                                                    "kind": 126,
                                                    "operandToken": {
                                                        "kind": 4259886,
                                                        "flags": 96,
                                                        "transformFlags": 0,
                                                        "start": 25,
                                                        "end": 32
                                                    },
                                                    "operand": {
                                                        "kind": 205,
                                                        "chainToken": {
                                                            "kind": 393240,
                                                            "flags": 64,
                                                            "transformFlags": 0,
                                                            "start": 37,
                                                            "end": 39
                                                        },
                                                        "member": {
                                                            "kind": 4276321,
                                                            "flags": 96,
                                                            "transformFlags": 0,
                                                            "start": 32,
                                                            "end": 37
                                                        },
                                                        "chain": {
                                                            "kind": 302,
                                                            "chain": {
                                                                "kind": 202,
                                                                "chain": null,
                                                                "expression": {
                                                                    "kind": 67191035,
                                                                    "text": "#foo",
                                                                    "rawText": "#foo",
                                                                    "flags": 96,
                                                                    "transformFlags": 0,
                                                                    "start": 39,
                                                                    "end": 43
                                                                },
                                                                "flags": 536870944,
                                                                "transformFlags": 2,
                                                                "start": 39,
                                                                "end": 43
                                                            },
                                                            "flags": 32,
                                                            "transformFlags": 0,
                                                            "start": 39,
                                                            "end": 43
                                                        },
                                                        "flags": 32,
                                                        "transformFlags": 0,
                                                        "start": 32,
                                                        "end": 43
                                                    },
                                                    "flags": 32,
                                                    "transformFlags": 0,
                                                    "start": 25,
                                                    "end": 43
                                                },
                                                "flags": 16,
                                                "transformFlags": 4096,
                                                "start": 25,
                                                "end": 43
                                            }
                                        ],
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 25,
                                        "end": 43
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 23,
                                    "end": 45
                                },
                                "flags": 0,
                                "transformFlags": 0,
                                "start": 21,
                                "end": 45
                            },
                            "flags": 0,
                            "transformFlags": 0,
                            "start": 17,
                            "end": 45
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 11,
                    "end": 45
                },
                "flags": 9,
                "transformFlags": 0,
                "start": 32,
                "end": 47
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 47
        }
    ],
    "isModule": false,
    "source": "class Foo { #foo; foo() { delete this?.#foo } }",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 47
}
```

### Printed

```javascript
class Foo {
  #foo;;
  foo() {
    delete this?.#foo;
  }
}
```

### Diagnostics

```javascript
✔ No errors
```

