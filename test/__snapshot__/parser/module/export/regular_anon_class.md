# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true }
`````

## Input

`````js
export default class {} foo
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 258,
            "exportKeyword": {
                "kind": 4202582,
                "flags": 80,
                "start": 0,
                "end": 6
            },
            "defaultKeyword": {
                "kind": 4194387,
                "flags": 80,
                "start": 0,
                "end": 14
            },
            "declaration": {
                "kind": 178,
                "declareKeyword": null,
                "decorators": null,
                "classKeyword": {
                    "kind": 37822544,
                    "flags": 80,
                    "start": 14,
                    "end": 20
                },
                "name": null,
                "typeParameters": null,
                "tail": {
                    "kind": 277,
                    "classHeritage": null,
                    "body": {
                        "kind": 262,
                        "elements": [],
                        "flags": 32,
                        "start": 22,
                        "end": 22
                    },
                    "flags": 20,
                    "start": 32,
                    "end": 23
                },
                "flags": 16,
                "start": 14,
                "end": 23
            },
            "flags": 16,
            "start": 0,
            "end": 23
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "foo",
                "rawText": "foo",
                "flags": 96,
                "start": 23,
                "end": 27
            },
            "flags": 16,
            "start": 23,
            "end": 27
        }
    ],
    "isModule": true,
    "source": "export default class {} foo",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 27
}
```

### Printed

```javascript

export default class  {};
foo;
```

### Diagnostics

```javascript
✔ No errors
```

