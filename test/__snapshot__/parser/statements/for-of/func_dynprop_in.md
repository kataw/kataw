# Kataw parser test case

## Input

`````js
for (function(){ }[x in y] of x);
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 167,
            "forKeyword": {
                "kind": 37757017,
                "flags": 0,
                "start": 0,
                "end": 3
            },
            "awaitKeyword": null,
            "initializer": {
                "kind": 536871042,
                "member": {
                    "kind": 177,
                    "asyncKeyword": null,
                    "functionKeyword": {
                        "kind": 37822554,
                        "flags": 0,
                        "start": 5,
                        "end": 13
                    },
                    "generatorToken": null,
                    "name": null,
                    "formalParameters": {
                        "kind": 214,
                        "formalParameterList": [],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 13,
                        "end": 15
                    },
                    "contents": {
                        "kind": 216,
                        "functionStatementList": {
                            "kind": 217,
                            "directives": [],
                            "statements": [],
                            "flags": 32,
                            "start": 16,
                            "end": 16
                        },
                        "flags": 32,
                        "start": 15,
                        "end": 18
                    },
                    "typeParameters": null,
                    "returnType": null,
                    "flags": 32,
                    "start": 5,
                    "end": 18
                },
                "expression": {
                    "kind": 198,
                    "left": {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "start": 19,
                        "end": 20
                    },
                    "operatorToken": {
                        "kind": 21006388,
                        "flags": 64,
                        "start": 20,
                        "end": 23
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "y",
                        "rawText": "y",
                        "flags": 96,
                        "start": 23,
                        "end": 25
                    },
                    "flags": 32,
                    "start": 19,
                    "end": 25
                },
                "flags": 32,
                "start": 5,
                "end": 26
            },
            "ofKeyword": {
                "kind": 16793717,
                "flags": 64,
                "start": 26,
                "end": 29
            },
            "expression": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 29,
                "end": 31
            },
            "statement": {
                "kind": 168,
                "flags": 16,
                "start": 32,
                "end": 33
            },
            "flags": 16,
            "start": 0,
            "end": 33
        }
    ],
    "isModule": false,
    "source": "for (function(){ }[x in y] of x);",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 33
}
```

### Printed

```javascript

for ( of x);
```

### Diagnostics

```javascript
✔ No errors
```

