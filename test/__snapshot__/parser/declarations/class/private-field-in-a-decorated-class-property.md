# Kataw parser test case

## Input

`````js
class Example {
  #priv;

  @anydecorator
  method = () => {
    return this.#priv;
  };
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
                "flags": 0,
                "start": 0,
                "end": 5
            },
            "name": {
                "kind": 134299649,
                "text": "Example",
                "rawText": "Example",
                "flags": 96,
                "start": 5,
                "end": 13
            },
            "typeParameters": null,
            "tail": {
                "kind": 277,
                "classHeritage": null,
                "body": {
                    "kind": 262,
                    "elements": [
                        {
                            "kind": 280,
                            "decorators": null,
                            "declaredToken": null,
                            "staticToken": null,
                            "asyncKeyword": null,
                            "key": {
                                "kind": 67174651,
                                "text": "#priv",
                                "flags": 96,
                                "start": 15,
                                "end": 23
                            },
                            "optionalToken": null,
                            "type": null,
                            "initializer": null,
                            "flags": 32,
                            "start": 15,
                            "end": 23
                        },
                        {
                            "kind": 281,
                            "flags": 96,
                            "start": 23,
                            "end": 24
                        },
                        {
                            "kind": 280,
                            "decorators": {
                                "kind": 207,
                                "decoratorList": [
                                    {
                                        "kind": 34611453,
                                        "expression": {
                                            "kind": 134299649,
                                            "text": "anydecorator",
                                            "rawText": "anydecorator",
                                            "flags": 96,
                                            "start": 29,
                                            "end": 41
                                        },
                                        "flags": 1,
                                        "start": 29,
                                        "end": 41
                                    }
                                ],
                                "flags": 32,
                                "start": 29,
                                "end": 41
                            },
                            "declaredToken": null,
                            "staticToken": null,
                            "asyncKeyword": null,
                            "key": {
                                "kind": 134299649,
                                "text": "method",
                                "rawText": "method",
                                "flags": 96,
                                "start": 41,
                                "end": 50
                            },
                            "optionalToken": null,
                            "type": null,
                            "initializer": {
                                "kind": 271,
                                "arrowToken": {
                                    "kind": 10,
                                    "flags": 0,
                                    "start": 55,
                                    "end": 58
                                },
                                "typeParameters": null,
                                "parameters": [],
                                "asyncKeyword": null,
                                "returnType": null,
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [
                                            {
                                                "kind": 161,
                                                "returnKeyword": {
                                                    "kind": 37757022,
                                                    "flags": 1,
                                                    "start": 60,
                                                    "end": 71
                                                },
                                                "expression": {
                                                    "kind": 129,
                                                    "member": {
                                                        "kind": 4276321,
                                                        "flags": 0,
                                                        "start": 71,
                                                        "end": 76
                                                    },
                                                    "expression": {
                                                        "kind": 67174651,
                                                        "text": "#priv",
                                                        "flags": 96,
                                                        "start": 77,
                                                        "end": 82
                                                    },
                                                    "flags": 536870944,
                                                    "start": 71,
                                                    "end": 82
                                                },
                                                "flags": 16,
                                                "start": 1,
                                                "end": 60
                                            }
                                        ],
                                        "flags": 33,
                                        "start": 60,
                                        "end": 83
                                    },
                                    "flags": 32,
                                    "start": 58,
                                    "end": 87
                                },
                                "flags": 32,
                                "start": 52,
                                "end": 87
                            },
                            "flags": 32,
                            "start": 24,
                            "end": 87
                        },
                        {
                            "kind": 281,
                            "flags": 96,
                            "start": 87,
                            "end": 88
                        }
                    ],
                    "flags": 32,
                    "start": 15,
                    "end": 88
                },
                "flags": 13,
                "start": 32,
                "end": 90
            },
            "flags": 16,
            "start": 0,
            "end": 90
        }
    ],
    "isModule": false,
    "source": "class Example {\n  #priv;\n\n  @anydecorator\n  method = () => {\n    return this.#priv;\n  };\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 90
}
```

### Printed

```javascript

class Example {
  #priv;

  @anydecorator
  method = () =>  {
      return  this.#priv;
    };

}
```

### Diagnostics

```javascript
✔ No errors
```

