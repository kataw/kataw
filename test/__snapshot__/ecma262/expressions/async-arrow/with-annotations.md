# Kataw parser test case

## Input

`````js
async (a:string)=>c;

async ([a]:string)=>c;
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
            "kind": 120,
            "expression": {
                "kind": 271,
                "asyncKeyword": {
                    "kind": 82031,
                    "flags": 64,
                    "start": 0,
                    "end": 5
                },
                "typeParameters": null,
                "arrowPatameterList": {
                    "kind": 342,
                    "parameters": [
                        {
                            "kind": 281,
                            "ellipsisToken": null,
                            "left": {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 96,
                                "start": 7,
                                "end": 8
                            },
                            "optionalToken": null,
                            "type": {
                                "kind": 139,
                                "bitwiseOrToken": null,
                                "bitwiseAndToken": null,
                                "type": {
                                    "kind": 134234347,
                                    "flags": 2097216,
                                    "start": 9,
                                    "end": 15
                                },
                                "flags": 2097152,
                                "start": 9,
                                "end": 15
                            },
                            "right": null,
                            "flags": 32,
                            "start": 7,
                            "end": 15
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 7,
                    "end": 16
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 16,
                    "end": 18
                },
                "contents": {
                    "kind": 134299649,
                    "text": "c",
                    "rawText": "c",
                    "flags": 96,
                    "start": 18,
                    "end": 19
                },
                "flags": 288,
                "start": 0,
                "end": 19
            },
            "flags": 16,
            "start": 0,
            "end": 20
        },
        {
            "kind": 120,
            "expression": {
                "kind": 271,
                "asyncKeyword": {
                    "kind": 82031,
                    "flags": 64,
                    "start": 20,
                    "end": 27
                },
                "typeParameters": null,
                "arrowPatameterList": {
                    "kind": 342,
                    "parameters": [
                        {
                            "kind": 281,
                            "ellipsisToken": null,
                            "left": {
                                "kind": 119,
                                "elementList": {
                                    "kind": 270,
                                    "elements": [
                                        {
                                            "kind": 134299649,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 96,
                                            "start": 30,
                                            "end": 31
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 30,
                                    "end": 31
                                },
                                "flags": 32,
                                "start": 29,
                                "end": 32
                            },
                            "optionalToken": null,
                            "type": {
                                "kind": 139,
                                "bitwiseOrToken": null,
                                "bitwiseAndToken": null,
                                "type": {
                                    "kind": 134234347,
                                    "flags": 2097216,
                                    "start": 33,
                                    "end": 39
                                },
                                "flags": 2097152,
                                "start": 33,
                                "end": 39
                            },
                            "right": null,
                            "flags": 32,
                            "start": 29,
                            "end": 39
                        }
                    ],
                    "trailingComma": false,
                    "flags": 34,
                    "start": 29,
                    "end": 40
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 40,
                    "end": 42
                },
                "contents": {
                    "kind": 134299649,
                    "text": "c",
                    "rawText": "c",
                    "flags": 96,
                    "start": 42,
                    "end": 43
                },
                "flags": 290,
                "start": 20,
                "end": 43
            },
            "flags": 16,
            "start": 20,
            "end": 44
        }
    ],
    "isModule": false,
    "source": "async (a:string)=>c;\n\nasync ([a]:string)=>c;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 44
}
```

### Printed

```javascript

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  async (a: string) => c;
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  async ([a,]: string) => c;

```

### Diagnostics

```javascript
✔ No errors
```

