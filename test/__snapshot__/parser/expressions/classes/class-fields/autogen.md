# Kataw parser test case

> Auto-generated tests to validate error recovery
>

### Cases

> `````js
> a = 0;
> `````

> `````js
> a = 0; b
> `````

> `````js
> a = 0; b(){}
> `````

> `````js
> a; b(){}
> `````

> `````js
> ['a'] = 0; ['b'](){}
> `````

> `````js
> ['a'];
> `````

> `````js
> ['a']; b;
> `````

> `````js
> ['a']; ['b'](){}
> `````

> `````js
> 0 = 0;
> `````

> `````js
> c = [c] = c
> `````

> `````js
> a = 0\n
> `````

> `````js
> a\n b(){}
> `````

> `````js
> a\n ['b'](){}
> `````

> `````js
> ['a']\n *b(){}
> `````

> `````js
> get\n *a(){}
> `````

> `````js
> a\n get
> `````

> `````js
> yield\n a
> `````

> `````js
> async = 0
> `````

> `````js
> async\n a(){}
> `````

> `````js
> async\n a
> `````

> `````js
> await;
> `````

> `````js
> await = 0;
> `````

> `````js
> await\n a
> `````

> `````js
> async *#a() { }
> `````

> `````js
> #a() { } #b() {}
> `````

> `````js
> get #a() { } get #b() {} set #a(foo) {} set #b(foo) {}
> `````

> `````js
> #a() { } static a() {}
> `````

> `````js
> #a() { } a() {} static a() {}
> `````

> `````js
> #a() { } get #b() {}
> `````

> `````js
> #a(...args) { }
> `````

> `````js
> #a(a = 1) { }
> `````

> `````js
> get #a() { }
> `````

> `````js
> set #a(a = (...args) => {}) { }
> `````

> `````js
> #a = 0;
> `````

> `````js
> get #get() {}
> `````

> `````js
> set #await(test) {}
> `````

> `````js
> set #arguments(test) {}
> `````

> `````js
> async #set() {}
> `````

> `````js
> *#static() {}
> `````

> `````js
> *#async() {}
> `````

> `````js
> async *#await() {}
> `````

> `````js
> async *#get() {}
> `````

> `````js
> async *#arguments() {}
> `````

> `````js
> #b = 1;set #a(foo) { }
> `````

> `````js
> #b = 1;get #a() { }
> `````

> `````js
> a;#a() { }
> `````

> `````js
> a;set #a(foo) { }
> `````

> `````js
> a;*#a() { }
> `````

> `````js
> a = 1;get #a() { }
> `````

> `````js
> #a = 0\n #b(){}
> `````

> `````js
> #a\n *#b(){}
> `````

> `````js
> #a = 0\n get #b(){}
> `````

> `````js
> b = 0\n #b(){}
> `````

> `````js
> b = 0\n get #b(){}
> `````

> `````js
> b\n *#b(){}
> `````

### Templates

#### expression_paren

`````js
(class { # });
`````

#### declaration_paren

`````js
(class extends Base { # });
`````

#### declaration

`````js
class C { # }
`````

#### expression

`````js
class C extends Base { # }
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 189,
                    "decorators": null,
                    "name": null,
                    "typeParameters": null,
                    "classHeritage": null,
                    "members": {
                        "kind": 277,
                        "elements": [
                            {
                                "kind": 280,
                                "decorators": null,
                                "declaredToken": null,
                                "staticToken": null,
                                "key": {
                                    "kind": 67125499,
                                    "text": "#",
                                    "flags": 768,
                                    "start": 8,
                                    "end": 10
                                },
                                "optionalToken": null,
                                "type": null,
                                "initializer": null,
                                "flags": 256,
                                "start": 8,
                                "end": 10
                            }
                        ],
                        "flags": 256,
                        "start": 8,
                        "end": 12
                    },
                    "flags": 256,
                    "start": 1,
                    "end": 12
                },
                "autofix": 0,
                "flags": 256,
                "start": 0,
                "end": 13
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 14
        }
    ],
    "isModule": false,
    "text": "(class { # });",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 8,
            "end": 10
        }
    ],
    "start": 0,
    "end": 14
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

