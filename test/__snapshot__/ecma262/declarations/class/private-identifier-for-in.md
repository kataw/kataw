# Kataw parser test case

## Input

`````js
class Foo { #foo = () => { for (#foo in this) ; } }
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
                            "initializer": {
                                "kind": 271,
                                "asyncKeyword": null,
                                "typeParameters": null,
                                "arrowPatameterList": {
                                    "kind": 342,
                                    "parameters": [],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 20,
                                    "end": 20
                                },
                                "returnType": null,
                                "arrowToken": {
                                    "kind": 10,
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 21,
                                    "end": 24
                                },
                                "contents": {
                                    "kind": 216,
                                    "functionStatementList": {
                                        "kind": 217,
                                        "directives": [],
                                        "statements": [
                                            {
                                                "kind": 166,
                                                "forKeyword": {
                                                    "kind": 37757017,
                                                    "flags": 80,
                                                    "transformFlags": 0,
                                                    "start": 26,
                                                    "end": 30
                                                },
                                                "initializer": {
                                                    "kind": 67191035,
                                                    "text": "#foo",
                                                    "rawText": "#foo",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 32,
                                                    "end": 36
                                                },
                                                "inKeyword": {
                                                    "kind": 21006388,
                                                    "flags": 64,
                                                    "transformFlags": 0,
                                                    "start": 36,
                                                    "end": 39
                                                },
                                                "expression": {
                                                    "kind": 4276321,
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 39,
                                                    "end": 44
                                                },
                                                "statement": {
                                                    "kind": 168,
                                                    "flags": 16,
                                                    "transformFlags": 0,
                                                    "start": 45,
                                                    "end": 47
                                                },
                                                "flags": 80,
                                                "transformFlags": 0,
                                                "start": 26,
                                                "end": 47
                                            }
                                        ],
                                        "flags": 32,
                                        "transformFlags": 0,
                                        "start": 26,
                                        "end": 47
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 24,
                                    "end": 49
                                },
                                "flags": 32,
                                "transformFlags": 0,
                                "start": 18,
                                "end": 49
                            },
                            "flags": 32,
                            "transformFlags": 128,
                            "start": 11,
                            "end": 49
                        }
                    ],
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 11,
                    "end": 49
                },
                "flags": 9,
                "transformFlags": 0,
                "start": 32,
                "end": 51
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 51
        }
    ],
    "isModule": false,
    "source": "class Foo { #foo = () => { for (#foo in this) ; } }",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 51
}
```

### Printed

```javascript

class Foo {
  #foo = () => {
    for (#foo in this);
  };
}
```

### Diagnostics

```javascript
✔ No errors
```

