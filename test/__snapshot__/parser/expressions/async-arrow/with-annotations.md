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

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 271,
            "arrowToken": {
                "kind": 10,
                "flags": 768,
                "start": 16,
                "end": 18
            },
            "typeParameters": null,
            "parameters": [
                {
                    "kind": 215,
                    "ellipsisToken": null,
                    "binding": {
                        "kind": 134299649,
                        "text": "a",
                        "rawText": "a",
                        "flags": 768,
                        "start": 7,
                        "end": 8
                    },
                    "optionalToken": null,
                    "type": {
                        "kind": 139,
                        "type": {
                            "kind": 134234347,
                            "flags": 768,
                            "start": 9,
                            "end": 15
                        },
                        "flags": 0,
                        "start": 8,
                        "end": 15
                    },
                    "initializer": null,
                    "flags": 256,
                    "start": 7,
                    "end": 15
                }
            ],
            "asyncToken": {
                "kind": 82031,
                "flags": 768,
                "start": 0,
                "end": 5
            },
            "returnType": null,
            "contents": {
                "kind": 134299649,
                "text": "c",
                "rawText": "c",
                "flags": 768,
                "start": 18,
                "end": 19
            },
            "flags": 2304,
            "start": 0,
            "end": 19
        },
        {
            "kind": 168,
            "flags": 128,
            "start": 19,
            "end": 20
        },
        {
            "kind": 271,
            "arrowToken": {
                "kind": 10,
                "flags": 768,
                "start": 40,
                "end": 42
            },
            "typeParameters": null,
            "parameters": [
                {
                    "kind": 215,
                    "ellipsisToken": null,
                    "binding": {
                        "kind": 119,
                        "elementList": {
                            "kind": 270,
                            "elements": [
                                {
                                    "kind": 134299649,
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 768,
                                    "start": 30,
                                    "end": 31
                                }
                            ],
                            "trailingComma": false,
                            "flags": 256,
                            "start": 30,
                            "end": 31
                        },
                        "flags": 256,
                        "start": 29,
                        "end": 32
                    },
                    "optionalToken": null,
                    "type": {
                        "kind": 139,
                        "type": {
                            "kind": 134234347,
                            "flags": 768,
                            "start": 33,
                            "end": 39
                        },
                        "flags": 0,
                        "start": 32,
                        "end": 39
                    },
                    "initializer": null,
                    "flags": 256,
                    "start": 29,
                    "end": 39
                }
            ],
            "asyncToken": {
                "kind": 82031,
                "flags": 768,
                "start": 20,
                "end": 27
            },
            "returnType": null,
            "contents": {
                "kind": 134299649,
                "text": "c",
                "rawText": "c",
                "flags": 768,
                "start": 42,
                "end": 43
            },
            "flags": 2304,
            "start": 20,
            "end": 43
        },
        {
            "kind": 168,
            "flags": 128,
            "start": 43,
            "end": 44
        }
    ],
    "isModule": false,
    "text": "async (a:string)=>c;\n\nasync ([a]:string)=>c;",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 44
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

