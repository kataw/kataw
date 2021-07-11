while-statement6# Kataw parser test case

## Input

`````js
var x = function (/* pre */foo/* post */) {
    return 'foo' + 'bar';
};
/* raz */
x(function (other) { return other });
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 155,
            "declareKeyword": null,
            "varKeyword": {
                "kind": 37757002,
                "flags": 80,
                "start": 0,
                "end": 3
            },
            "declarationList": {
                "kind": 156,
                "declarations": [
                    {
                        "kind": 157,
                        "binding": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 3,
                            "end": 5
                        },
                        "type": null,
                        "initializer": {
                            "kind": 177,
                            "asyncKeyword": null,
                            "functionKeyword": {
                                "kind": 37822554,
                                "flags": 64,
                                "start": 7,
                                "end": 16
                            },
                            "asteriskToken": null,
                            "name": null,
                            "typeParameters": null,
                            "formalParameterList": {
                                "kind": 214,
                                "formalParameters": [
                                    {
                                        "kind": 134299649,
                                        "text": "foo",
                                        "rawText": "foo",
                                        "flags": 96,
                                        "start": 18,
                                        "end": 30
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 18,
                                "end": 30
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
                                                "flags": 81,
                                                "start": 43,
                                                "end": 54
                                            },
                                            "expression": {
                                                "kind": 198,
                                                "left": {
                                                    "kind": 201392131,
                                                    "text": "foo",
                                                    "rawText": "'foo'",
                                                    "flags": 4194400,
                                                    "start": 54,
                                                    "end": 60
                                                },
                                                "operatorToken": {
                                                    "kind": 99634,
                                                    "flags": 96,
                                                    "start": 60,
                                                    "end": 62
                                                },
                                                "right": {
                                                    "kind": 201392131,
                                                    "text": "bar",
                                                    "rawText": "'bar'",
                                                    "flags": 4194400,
                                                    "start": 62,
                                                    "end": 68
                                                },
                                                "flags": 4194400,
                                                "start": 54,
                                                "end": 68
                                            },
                                            "flags": 81,
                                            "start": 43,
                                            "end": 69
                                        }
                                    ],
                                    "flags": 33,
                                    "start": 43,
                                    "end": 69
                                },
                                "flags": 32,
                                "start": 41,
                                "end": 71
                            },
                            "returnType": null,
                            "flags": 32,
                            "start": 7,
                            "end": 71
                        },
                        "flags": 16,
                        "start": 3,
                        "end": 71
                    }
                ],
                "flags": 16,
                "start": 3,
                "end": 71
            },
            "flags": 16,
            "start": 0,
            "end": 72
        },
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 97,
                    "start": 72,
                    "end": 84
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 177,
                            "asyncKeyword": null,
                            "functionKeyword": {
                                "kind": 37822554,
                                "flags": 64,
                                "start": 85,
                                "end": 93
                            },
                            "asteriskToken": null,
                            "name": null,
                            "typeParameters": null,
                            "formalParameterList": {
                                "kind": 214,
                                "formalParameters": [
                                    {
                                        "kind": 134299649,
                                        "text": "other",
                                        "rawText": "other",
                                        "flags": 96,
                                        "start": 95,
                                        "end": 100
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 32,
                                "start": 95,
                                "end": 100
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
                                                "start": 103,
                                                "end": 110
                                            },
                                            "expression": {
                                                "kind": 134299649,
                                                "text": "other",
                                                "rawText": "other",
                                                "flags": 96,
                                                "start": 110,
                                                "end": 116
                                            },
                                            "flags": 80,
                                            "start": 103,
                                            "end": 116
                                        }
                                    ],
                                    "flags": 32,
                                    "start": 103,
                                    "end": 116
                                },
                                "flags": 32,
                                "start": 101,
                                "end": 118
                            },
                            "returnType": null,
                            "flags": 32,
                            "start": 85,
                            "end": 118
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 85,
                    "end": 118
                },
                "flags": 268435488,
                "start": 72,
                "end": 119
            },
            "flags": 16,
            "start": 72,
            "end": 120
        }
    ],
    "isModule": false,
    "source": "var x = function (/* pre */foo/* post */) {\n    return 'foo' + 'bar';\n};\n/* raz */\nx(function (other) { return other });",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 120
}
```

### Printed

```javascript

var  x = function ( /* pre */foo /* post */ ) {
  return "'foo'" + "'bar'";
} ;
 /* raz */
x( function ( other ) {
  return other;
} );

```

### Diagnostics

```javascript
✔ No errors
```

