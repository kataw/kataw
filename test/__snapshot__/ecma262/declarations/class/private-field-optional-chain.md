# Kataw parser test case

## Input

`````js
class Foo {
	#x
	foo() {
		this?.#x.y
		this?.y.#x
		this.#x?.y
	}
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
                "text": "Foo",
                "rawText": "Foo",
                "flags": 96,
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
                                "text": "#x",
                                "rawText": "#x",
                                "flags": 97,
                                "start": 11,
                                "end": 15
                            },
                            "optionalToken": null,
                            "type": null,
                            "initializer": null,
                            "flags": 32,
                            "start": 11,
                            "end": 15
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
                                    "flags": 97,
                                    "start": 15,
                                    "end": 20
                                },
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 0,
                                    "start": 21,
                                    "end": 22
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
                                                    "kind": 205,
                                                    "chainToken": {
                                                        "kind": 393240,
                                                        "flags": 64,
                                                        "start": 31,
                                                        "end": 33
                                                    },
                                                    "member": {
                                                        "kind": 4276321,
                                                        "flags": 97,
                                                        "start": 24,
                                                        "end": 31
                                                    },
                                                    "chain": {
                                                        "kind": 202,
                                                        "chain": {
                                                            "kind": 302,
                                                            "chain": {
                                                                "kind": 202,
                                                                "chain": null,
                                                                "expression": {
                                                                    "kind": 67191035,
                                                                    "text": "#x",
                                                                    "rawText": "#x",
                                                                    "flags": 96,
                                                                    "start": 33,
                                                                    "end": 35
                                                                },
                                                                "flags": 536870944,
                                                                "start": 33,
                                                                "end": 35
                                                            },
                                                            "flags": 32,
                                                            "start": 33,
                                                            "end": 35
                                                        },
                                                        "expression": {
                                                            "kind": 134299649,
                                                            "text": "y",
                                                            "rawText": "y",
                                                            "flags": 96,
                                                            "start": 36,
                                                            "end": 37
                                                        },
                                                        "flags": 536870944,
                                                        "start": 35,
                                                        "end": 37
                                                    },
                                                    "flags": 32,
                                                    "start": 24,
                                                    "end": 37
                                                },
                                                "flags": 16,
                                                "start": 24,
                                                "end": 37
                                            },
                                            {
                                                "kind": 120,
                                                "expression": {
                                                    "kind": 205,
                                                    "chainToken": {
                                                        "kind": 393240,
                                                        "flags": 64,
                                                        "start": 44,
                                                        "end": 46
                                                    },
                                                    "member": {
                                                        "kind": 4276321,
                                                        "flags": 97,
                                                        "start": 37,
                                                        "end": 44
                                                    },
                                                    "chain": {
                                                        "kind": 202,
                                                        "chain": {
                                                            "kind": 302,
                                                            "chain": {
                                                                "kind": 202,
                                                                "chain": null,
                                                                "expression": {
                                                                    "kind": 134299649,
                                                                    "text": "y",
                                                                    "rawText": "y",
                                                                    "flags": 96,
                                                                    "start": 46,
                                                                    "end": 47
                                                                },
                                                                "flags": 536870944,
                                                                "start": 46,
                                                                "end": 47
                                                            },
                                                            "flags": 32,
                                                            "start": 46,
                                                            "end": 47
                                                        },
                                                        "expression": {
                                                            "kind": 67191035,
                                                            "text": "#x",
                                                            "rawText": "#x",
                                                            "flags": 96,
                                                            "start": 48,
                                                            "end": 50
                                                        },
                                                        "flags": 536870944,
                                                        "start": 47,
                                                        "end": 50
                                                    },
                                                    "flags": 32,
                                                    "start": 37,
                                                    "end": 50
                                                },
                                                "flags": 16,
                                                "start": 37,
                                                "end": 50
                                            },
                                            {
                                                "kind": 120,
                                                "expression": {
                                                    "kind": 205,
                                                    "chainToken": {
                                                        "kind": 393240,
                                                        "flags": 64,
                                                        "start": 60,
                                                        "end": 62
                                                    },
                                                    "member": {
                                                        "kind": 129,
                                                        "member": {
                                                            "kind": 4276321,
                                                            "flags": 97,
                                                            "start": 50,
                                                            "end": 57
                                                        },
                                                        "expression": {
                                                            "kind": 67191035,
                                                            "text": "#x",
                                                            "rawText": "#x",
                                                            "flags": 96,
                                                            "start": 58,
                                                            "end": 60
                                                        },
                                                        "flags": 97,
                                                        "start": 50,
                                                        "end": 60
                                                    },
                                                    "chain": {
                                                        "kind": 302,
                                                        "chain": {
                                                            "kind": 202,
                                                            "chain": null,
                                                            "expression": {
                                                                "kind": 134299649,
                                                                "text": "y",
                                                                "rawText": "y",
                                                                "flags": 96,
                                                                "start": 62,
                                                                "end": 63
                                                            },
                                                            "flags": 536870944,
                                                            "start": 62,
                                                            "end": 63
                                                        },
                                                        "flags": 32,
                                                        "start": 62,
                                                        "end": 63
                                                    },
                                                    "flags": 32,
                                                    "start": 50,
                                                    "end": 63
                                                },
                                                "flags": 16,
                                                "start": 50,
                                                "end": 63
                                            }
                                        ],
                                        "flags": 33,
                                        "start": 24,
                                        "end": 63
                                    },
                                    "flags": 32,
                                    "start": 22,
                                    "end": 66
                                },
                                "flags": 0,
                                "start": 20,
                                "end": 66
                            },
                            "flags": 0,
                            "start": 15,
                            "end": 66
                        }
                    ],
                    "flags": 32,
                    "start": 11,
                    "end": 66
                },
                "flags": 9,
                "start": 32,
                "end": 68
            },
            "flags": 16,
            "start": 0,
            "end": 68
        }
    ],
    "isModule": false,
    "source": "class Foo {\n\t#x\n\tfoo() {\n\t\tthis?.#x.y\n\t\tthis?.y.#x\n\t\tthis.#x?.y\n\t}\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 68
}
```

### Printed

```javascript

class Foo {
  #x;
  foo(){
    this ?.#x.y;
    this ?.y.#x;
    this .#x?.y;
  }
}
```

### Diagnostics

```javascript
✔ No errors
```

