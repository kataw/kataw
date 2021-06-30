# Kataw parser test case

## Input

`````js
for (function(){ }[foo] in x);
`````

## Options

### Parser Options

`````js
{}
`````

### Printer Options

`````js
{
  "tabWidth": 2,
  "printWidth": 80,
  "useTabs": false,
  "bracketSpacing": true
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
            "kind": 166,
            "forKeyword": {
                "kind": 37757017,
                "flags": 80,
                "start": 0,
                "end": 3
            },
            "initializer": {
                "kind": 130,
                "member": {
                    "kind": 177,
                    "asyncKeyword": null,
                    "functionKeyword": {
                        "kind": 37822554,
                        "flags": 64,
                        "start": 5,
                        "end": 13
                    },
                    "asteriskToken": null,
                    "name": null,
                    "typeParameters": null,
                    "formalParameterList": {
                        "kind": 214,
                        "formalParameters": [],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 14,
                        "end": 14
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
                    "returnType": null,
                    "flags": 32,
                    "start": 5,
                    "end": 18
                },
                "expression": {
                    "kind": 134299649,
                    "text": "foo",
                    "rawText": "foo",
                    "flags": 96,
                    "start": 19,
                    "end": 22
                },
                "flags": 536870944,
                "start": 5,
                "end": 23
            },
            "inKeyword": {
                "kind": 21006388,
                "flags": 64,
                "start": 23,
                "end": 26
            },
            "expression": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 26,
                "end": 28
            },
            "statement": {
                "kind": 168,
                "flags": 16,
                "start": 29,
                "end": 30
            },
            "flags": 80,
            "start": 0,
            "end": 30
        }
    ],
    "isModule": false,
    "source": "for (function(){ }[foo] in x);",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 30
}
```

### Printed

```javascript

for (function () { }[foo] in x)
  ;

```

### Diagnostics

```javascript
✔ No errors
```

