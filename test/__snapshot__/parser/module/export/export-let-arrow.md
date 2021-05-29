# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true }
`````

## Input

`````js
export let foo = async () => this
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 257,
            "exportKeyword": {
                "kind": 4202582,
                "flags": 80,
                "start": 0,
                "end": 6
            },
            "declaration": {
                "kind": 162,
                "lexicalKeyword": {
                    "kind": 41951307,
                    "flags": 80,
                    "start": 6,
                    "end": 10
                },
                "binding": {
                    "kind": 151,
                    "bindingList": [
                        {
                            "kind": 190,
                            "binding": {
                                "kind": 134299649,
                                "text": "foo",
                                "rawText": "foo",
                                "flags": 96,
                                "start": 10,
                                "end": 14
                            },
                            "optionalToken": null,
                            "type": null,
                            "initializer": {
                                "kind": 271,
                                "arrowToken": {
                                    "kind": 10,
                                    "flags": 64,
                                    "start": 25,
                                    "end": 28
                                },
                                "typeParameters": null,
                                "parameters": [],
                                "asyncKeyword": {
                                    "kind": 82031,
                                    "flags": 64,
                                    "start": 16,
                                    "end": 22
                                },
                                "returnType": null,
                                "contents": {
                                    "kind": 4276321,
                                    "flags": 96,
                                    "start": 28,
                                    "end": 33
                                },
                                "flags": 288,
                                "start": 16,
                                "end": 33
                            },
                            "flags": 16,
                            "start": 10,
                            "end": 33
                        }
                    ],
                    "flags": 16,
                    "start": 10,
                    "end": 33
                },
                "flags": 33554448,
                "start": 6,
                "end": 33
            },
            "namedExports": null,
            "exportFromClause": null,
            "fromClause": null,
            "exportKind": 0,
            "flags": 16,
            "start": 0,
            "end": 33
        }
    ],
    "isModule": true,
    "source": "export let foo = async () => this",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 33
}
```

### Printed

```javascript

export let foo = async () =>  this;
```

### Diagnostics

```javascript
✔ No errors
```

