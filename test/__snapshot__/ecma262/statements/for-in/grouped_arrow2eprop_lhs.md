# Kataw parser test case

## Input

`````js
for (((x)=>{}).x in y);
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
                "kind": 129,
                "member": {
                    "kind": 121,
                    "expression": {
                        "kind": 271,
                        "asyncKeyword": null,
                        "typeParameters": null,
                        "arrowPatameterList": {
                            "kind": 342,
                            "parameters": [
                                {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "start": 7,
                                    "end": 8
                                }
                            ],
                            "trailingComma": false,
                            "flags": 0,
                            "start": 7,
                            "end": 9
                        },
                        "returnType": null,
                        "arrowToken": {
                            "kind": 10,
                            "flags": 64,
                            "start": 9,
                            "end": 11
                        },
                        "contents": {
                            "kind": 216,
                            "functionStatementList": {
                                "kind": 217,
                                "directives": [],
                                "statements": [],
                                "flags": 32,
                                "start": 12,
                                "end": 12
                            },
                            "flags": 32,
                            "start": 11,
                            "end": 13
                        },
                        "flags": 32,
                        "start": 6,
                        "end": 13
                    },
                    "flags": 32,
                    "start": 5,
                    "end": 14
                },
                "expression": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 15,
                    "end": 16
                },
                "flags": 536870944,
                "start": 5,
                "end": 16
            },
            "inKeyword": {
                "kind": 21006388,
                "flags": 64,
                "start": 16,
                "end": 19
            },
            "expression": {
                "kind": 134299649,
                "text": "y",
                "rawText": "y",
                "flags": 96,
                "start": 19,
                "end": 21
            },
            "statement": {
                "kind": 168,
                "flags": 16,
                "start": 22,
                "end": 23
            },
            "flags": 80,
            "start": 0,
            "end": 23
        }
    ],
    "isModule": false,
    "source": "for (((x)=>{}).x in y);",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 23
}
```

### Printed

```javascript

for ((() =>  {}).x in y);
```

### Diagnostics

```javascript
✔ No errors
```

