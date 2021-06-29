# Kataw parser test case

## Input

`````js
class Foo { static x = function() { return this } }
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
                            "staticKeyword": {
                                "kind": 8388716,
                                "flags": 64,
                                "start": 11,
                                "end": 18
                            },
                            "asyncKeyword": null,
                            "key": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "start": 18,
                                "end": 20
                            },
                            "optionalToken": null,
                            "type": null,
                            "initializer": {
                                "kind": 177,
                                "asyncKeyword": null,
                                "functionKeyword": {
                                    "kind": 37822554,
                                    "flags": 64,
                                    "start": 22,
                                    "end": 31
                                },
                                "asteriskToken": null,
                                "name": null,
                                "typeParameters": null,
                                "formalParameterList": {
                                    "kind": 214,
                                    "formalParameters": [],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 32,
                                    "end": 32
                                },
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
                                                    "flags": 80,
                                                    "start": 35,
                                                    "end": 42
                                                },
                                                "expression": {
                                                    "kind": 4276321,
                                                    "flags": 96,
                                                    "start": 42,
                                                    "end": 47
                                                },
                                                "flags": 80,
                                                "start": 35,
                                                "end": 47
                                            }
                                        ],
                                        "flags": 32,
                                        "start": 35,
                                        "end": 47
                                    },
                                    "flags": 32,
                                    "start": 33,
                                    "end": 49
                                },
                                "returnType": null,
                                "flags": 32,
                                "start": 22,
                                "end": 49
                            },
                            "flags": 32,
                            "start": 18,
                            "end": 49
                        }
                    ],
                    "flags": 32,
                    "start": 11,
                    "end": 49
                },
                "flags": 9,
                "start": 32,
                "end": 51
            },
            "flags": 16,
            "start": 0,
            "end": 51
        }
    ],
    "isModule": false,
    "source": "class Foo { static x = function() { return this } }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 51
}
```

### Printed

```javascript

class Foo {
  x = function () {
      return  this;
    };
}
```

### Diagnostics

```javascript
✔ No errors
```

